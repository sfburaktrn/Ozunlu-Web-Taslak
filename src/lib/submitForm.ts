type SubmitResult = { success: true } | { success: false; error: string };

export async function submitForm(payload: Record<string, unknown>): Promise<SubmitResult> {
    const res = await fetch('/api/forms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    const data = (await res.json().catch(() => ({}))) as { error?: string };

    if (!res.ok) {
        return { success: false, error: data.error || 'Gönderim başarısız.' };
    }

    return { success: true };
}
