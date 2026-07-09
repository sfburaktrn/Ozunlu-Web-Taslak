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

function formatValue(value: string | null | undefined) {
    const trimmed = value?.trim();
    return trimmed ? trimmed : '-';
}

type EmailSection = {
    title: string;
    fields: Array<{ label: string; value: string | null | undefined }>;
};

function buildEmailText(title: string, intro: string, sections: EmailSection[]) {
    return [
        title,
        '',
        intro,
        '',
        ...sections.flatMap((section) => [
            section.title,
            '-'.repeat(section.title.length),
            ...section.fields.map((field) => `${field.label}: ${formatValue(field.value)}`),
            '',
        ]),
    ].join('\n');
}

function buildEmailHtml(title: string, intro: string, sections: EmailSection[]) {
    const sectionHtml = sections
        .map((section) => {
            const rows = section.fields
                .map(
                    (field) => `
                        <tr>
                            <td style="padding:8px 0;color:#6b7280;font-size:14px;width:180px;vertical-align:top;">${field.label}</td>
                            <td style="padding:8px 0;color:#111827;font-size:14px;font-weight:600;">${formatValue(field.value)}</td>
                        </tr>`,
                )
                .join('');

            return `
                <div style="margin-top:24px;padding:24px;border:1px solid #e5e7eb;border-radius:16px;background:#ffffff;">
                    <h2 style="margin:0 0 12px;color:#111827;font-size:18px;">${section.title}</h2>
                    <table style="width:100%;border-collapse:collapse;">${rows}</table>
                </div>`;
        })
        .join('');

    return `
        <div style="background:#f3f4f6;padding:32px 16px;font-family:Arial,sans-serif;">
            <div style="max-width:720px;margin:0 auto;background:#f9fafb;border-radius:24px;overflow:hidden;border:1px solid #e5e7eb;">
                <div style="background:#000552;padding:28px 32px;">
                    <p style="margin:0;color:#c7d2fe;font-size:12px;letter-spacing:1.2px;font-weight:700;text-transform:uppercase;">Ozunlu Form Bildirimi</p>
                    <h1 style="margin:10px 0 0;color:#ffffff;font-size:30px;line-height:1.2;">${title}</h1>
                </div>
                <div style="padding:32px;">
                    <p style="margin:0;color:#374151;font-size:15px;line-height:1.7;">${intro}</p>
                    ${sectionHtml}
                </div>
            </div>
        </div>`;
}

function buildProposalBody(data: ProposalPayload) {
    return {
        intro: 'Web sitenizden yeni bir teklif talebi alindi.',
        sections: [
            {
                title: 'Teklif Detaylari',
                fields: [
                    { label: 'Urun tipi', value: data.type_label || data.productType },
                    { label: 'Secili urun', value: data.selectedProduct },
                    { label: 'Marka', value: data.brand },
                    { label: 'Model', value: data.model },
                    { label: 'Yuk tipi', value: data.cargoType },
                    { label: 'Hacim (m3)', value: data.volumeM3 },
                    { label: 'Kalinlik', value: data.thickness },
                    { label: 'Adet', value: data.quantity },
                    { label: 'Dingil', value: data.axle },
                    { label: 'Odeme', value: data.paymentMethod },
                ],
            },
            {
                title: 'Iletisim Bilgileri',
                fields: [
                    { label: 'Firma', value: data.companyName },
                    { label: 'Yetkili kisi', value: data.contactPerson },
                    { label: 'Telefon', value: data.contactPhone },
                    { label: 'E-posta', value: data.email },
                    { label: 'Nereden duydu', value: data.heardFrom },
                    { label: 'Mesaj', value: data.message },
                ],
            },
        ] satisfies EmailSection[],
    };
}

function buildContactBody(data: ContactPayload) {
    return {
        intro: 'Web sitenizdeki iletisim formu uzerinden yeni bir mesaj alindi.',
        sections: [
            {
                title: 'Gonderen Bilgileri',
                fields: [
                    { label: 'Ad soyad', value: data.name },
                    { label: 'Firma', value: data.company },
                    { label: 'E-posta', value: data.email },
                    { label: 'Telefon', value: data.phone },
                ],
            },
            {
                title: 'Mesaj',
                fields: [{ label: 'Icerik', value: data.message }],
            },
        ] satisfies EmailSection[],
    };
}

function serviceUnavailable(message: string) {
    return NextResponse.json({ error: message }, { status: 503 });
}

async function sendNotificationEmail({
    to,
    subject,
    replyTo,
    text,
    html,
}: {
    to: string;
    subject: string;
    replyTo?: string;
    text: string;
    html: string;
}) {
    const apiKey = getResendApiKey();
    const from = getFromEmail();

    if (!apiKey || !from) {
        throw new Error('missing-email-config');
    }

    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
        from,
        to,
        subject,
        text,
        html,
        replyTo: replyTo ? [replyTo] : undefined,
    });

    if (result.error) {
        throw new Error(result.error.message);
    }
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

        const content = buildContactBody(payload);

        try {
            await sendNotificationEmail({
                to: getFormRecipient('contact'),
                subject: `İletişim Formu — ${payload.name.trim()}`,
                replyTo: payload.email.trim(),
                text: buildEmailText('Yeni Iletisim Formu', content.intro, content.sections),
                html: buildEmailHtml('Yeni Iletisim Formu', content.intro, content.sections),
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
        const content = buildProposalBody({ ...payload, productType });

        try {
            await sendNotificationEmail({
                to: getFormRecipient(productType),
                subject: `${productLabel} Teklif Formu — ${payload.contactPerson.trim()}`,
                replyTo: payload.email.trim(),
                text: buildEmailText(`Yeni ${productLabel} Teklif Talebi`, content.intro, content.sections),
                html: buildEmailHtml(`Yeni ${productLabel} Teklif Talebi`, content.intro, content.sections),
            });
        } catch {
            return NextResponse.json({ error: 'E-posta gönderilemedi.' }, { status: 502 });
        }

        return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Geçersiz form tipi.' }, { status: 400 });
}
