import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getFormRecipient, hasFormRecipient } from '@/lib/siteEmails';

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

function getResendApiKey() {
    return process.env.RESEND_API_KEY?.trim();
}

function getFromEmail() {
    return process.env.RESEND_FROM_EMAIL?.trim();
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

async function sendNotificationEmail({
    to,
    subject,
    replyTo,
    text,
}: {
    to: string;
    subject: string;
    replyTo?: string;
    text: string;
}) {
    const apiKey = getResendApiKey();
    const from = getFromEmail();

    if (!apiKey || !from) {
        throw new Error('missing-email-config');
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
        from,
        to,
        subject,
        text,
        replyTo: replyTo ? [replyTo] : undefined,
    });
}

export async function POST(request: Request) {
    const apiKey = getResendApiKey();
    const fromEmail = getFromEmail();
    if (!apiKey || !fromEmail) {
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

        try {
            await sendNotificationEmail({
                to: getFormRecipient('contact'),
                subject: `İletişim Formu — ${payload.name.trim()}`,
                replyTo: payload.email.trim(),
                text: [
                `Ad Soyad: ${payload.name.trim()}`,
                `Firma: ${payload.company?.trim() || '-'}`,
                `E-posta: ${payload.email.trim()}`,
                `Telefon: ${payload.phone?.trim() || '-'}`,
                '',
                'Mesaj:',
                payload.message.trim(),
                ].join('\n'),
            });
        } catch {
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

        try {
            await sendNotificationEmail({
                to: getFormRecipient(productType),
                subject: `${productLabel} Teklif Formu — ${payload.contactPerson.trim()}`,
                replyTo: payload.email.trim(),
                text: buildProposalBody({ ...payload, productType }),
            });
        } catch {
            return NextResponse.json({ error: 'E-posta gönderilemedi.' }, { status: 502 });
        }

        return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Geçersiz form tipi.' }, { status: 400 });
}
