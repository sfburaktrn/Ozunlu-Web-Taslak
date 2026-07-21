import { NextResponse } from 'next/server';
import {
    WEB3FORMS_ACCESS_KEYS,
    WEB3FORMS_ENDPOINT,
    type FormChannel,
} from '@/lib/web3forms.server';

type FormPayload = {
    type?: string;
    productType?: string;
    type_label?: string;
    website?: string;
    name?: string;
    contactPerson?: string;
    companyName?: string;
    [key: string]: unknown;
};

function resolveChannel(payload: FormPayload): FormChannel {
    if (payload.type === 'proposal') return 'sales';
    return 'contact';
}

function buildSubject(payload: FormPayload): string {
    if (payload.type === 'proposal') {
        const product =
            payload.productType === 'dorse' || payload.type_label === 'Dorse'
                ? 'Yarı Römork / Dorse'
                : 'Damper';
        const name = String(payload.contactPerson || payload.companyName || 'Teklif');
        return `${product} Teklif Formu — ${name}`;
    }

    const name = String(payload.name || 'İletişim');
    return `İletişim Formu — ${name}`;
}

export async function POST(request: Request) {
    let payload: FormPayload;
    try {
        payload = (await request.json()) as FormPayload;
    } catch {
        return NextResponse.json({ error: 'Geçersiz istek.' }, { status: 400 });
    }

    // Honeypot — botlar dolu gönderirse sessizce başarılı say
    if (typeof payload.website === 'string' && payload.website.trim()) {
        return NextResponse.json({ success: true });
    }

    const channel = resolveChannel(payload);
    const access_key = WEB3FORMS_ACCESS_KEYS[channel]?.trim();

    if (!access_key) {
        return NextResponse.json(
            { error: 'Form servisi henüz yapılandırılmadı.' },
            { status: 503 },
        );
    }

    if (payload.type === 'contact') {
        if (!String(payload.name || '').trim() || !String(payload.email || '').trim() || !String(payload.message || '').trim()) {
            return NextResponse.json({ error: 'Zorunlu alanları doldurun.' }, { status: 400 });
        }
    }

    if (payload.type === 'proposal') {
        if (
            !String(payload.contactPerson || '').trim() ||
            !String(payload.email || '').trim() ||
            !String(payload.contactPhone || '').trim()
        ) {
            return NextResponse.json({ error: 'İletişim bilgilerini doldurun.' }, { status: 400 });
        }
    }

    const { website: _honeypot, ...fields } = payload;

    try {
        const res = await fetch(WEB3FORMS_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                access_key,
                subject: buildSubject(payload),
                from_name: 'Özünlü Damper Web',
                ...fields,
            }),
        });

        const data = (await res.json().catch(() => ({}))) as {
            success?: boolean;
            message?: string;
        };

        if (!res.ok || data.success === false) {
            return NextResponse.json(
                { error: data.message || 'E-posta gönderilemedi.' },
                { status: 502 },
            );
        }

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: 'E-posta gönderilemedi.' }, { status: 502 });
    }
}
