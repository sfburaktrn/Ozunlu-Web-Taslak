import { NextResponse } from 'next/server';
import { getFormRecipient, hasFormRecipient } from '@/lib/siteEmails';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

type ContactPayload = {
    type: 'contact';
    name: string;
    company?: string;
    email: string;
    phone?: string;
    message: string;
    website?: string;
};

type ProposalPayload = {
    type: 'proposal';
    productType?: 'damper' | 'dorse';
    website?: string;
    [key: string]: string | null | undefined;
};

type FormPayload = ContactPayload | ProposalPayload;

function getAccessKey() {
    return process.env.WEB3FORMS_ACCESS_KEY?.trim();
}

function buildProposalBody(data: ProposalPayload) {
    const lines: string[] = [
        'Yeni teklif talebi',
        '---',
        `Ürün tipi: ${data.type_label || data.productType || '-'}`,
        `Seçili ürün: ${data.selectedProduct || '-'}`,
        `Marka: ${data.brand || '-'}`,
        `Model: ${data.model || '-'}`,
        `Yük tipi: ${data.cargoType || '-'}`,
        `Hacim (m³): ${data.volumeM3 || '-'}`,
        `Kalınlık: ${data.thickness || '-'}`,
        `Adet: ${data.quantity || '-'}`,
        `Dingil: ${data.axle || '-'}`,
        `Ödeme: ${data.paymentMethod || '-'}`,
        '---',
        `Firma: ${data.companyName || '-'}`,
        `Yetkili: ${data.contactPerson || '-'}`,
        `Telefon: ${data.contactPhone || '-'}`,
        `E-posta: ${data.email || '-'}`,
        `Nereden duydu: ${data.heardFrom || '-'}`,
        `Mesaj: ${data.message || '-'}`,
    ];

    return lines.join('\n');
}

function serviceUnavailable(message: string) {
    return NextResponse.json({ error: message }, { status: 503 });
}

export async function POST(request: Request) {
    const accessKey = getAccessKey();
    if (!accessKey) {
        return serviceUnavailable('Form servisi henüz yapılandırılmadı.');
    }

    let payload: FormPayload;
    try {
        payload = (await request.json()) as FormPayload;
    } catch {
        return NextResponse.json({ error: 'Geçersiz istek.' }, { status: 400 });
    }

    if (payload.website) {
        return NextResponse.json({ success: true });
    }

    if (payload.type === 'contact') {
        if (!hasFormRecipient('contact')) {
            return serviceUnavailable('İletişim formu e-posta adresi tanımlı değil.');
        }

        if (!payload.name?.trim() || !payload.email?.trim() || !payload.message?.trim()) {
            return NextResponse.json({ error: 'Zorunlu alanları doldurun.' }, { status: 400 });
        }

        const body = {
            access_key: accessKey,
            subject: `İletişim Formu — ${payload.name.trim()}`,
            from_name: payload.name.trim(),
            email: payload.email.trim(),
            replyto: payload.email.trim(),
            to: getFormRecipient('contact'),
            message: [
                `Ad Soyad: ${payload.name.trim()}`,
                `Firma: ${payload.company?.trim() || '-'}`,
                `E-posta: ${payload.email.trim()}`,
                `Telefon: ${payload.phone?.trim() || '-'}`,
                '',
                'Mesaj:',
                payload.message.trim(),
            ].join('\n'),
        };

        const res = await fetch(WEB3FORMS_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(body),
        });

        const result = await res.json();
        if (!res.ok || !result.success) {
            return NextResponse.json({ error: 'E-posta gönderilemedi.' }, { status: 502 });
        }

        return NextResponse.json({ success: true });
    }

    if (payload.type === 'proposal') {
        const productType = payload.productType === 'dorse' ? 'dorse' : 'damper';

        if (!hasFormRecipient(productType)) {
            return serviceUnavailable(
                productType === 'damper'
                    ? 'Damper teklif formu e-posta adresi tanımlı değil.'
                    : 'Dorse teklif formu e-posta adresi tanımlı değil.',
            );
        }

        if (!payload.contactPerson?.trim() || !payload.email?.trim() || !payload.contactPhone?.trim()) {
            return NextResponse.json({ error: 'İletişim bilgilerini doldurun.' }, { status: 400 });
        }

        const productLabel = productType === 'damper' ? 'Damper' : 'Dorse';

        const body = {
            access_key: accessKey,
            subject: `${productLabel} Teklif Formu — ${payload.contactPerson.trim()}`,
            from_name: payload.contactPerson.trim(),
            email: payload.email.trim(),
            replyto: payload.email.trim(),
            to: getFormRecipient(productType),
            message: buildProposalBody({ ...payload, productType }),
        };

        const res = await fetch(WEB3FORMS_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(body),
        });

        const result = await res.json();
        if (!res.ok || !result.success) {
            return NextResponse.json({ error: 'E-posta gönderilemedi.' }, { status: 502 });
        }

        return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Geçersiz form tipi.' }, { status: 400 });
}
