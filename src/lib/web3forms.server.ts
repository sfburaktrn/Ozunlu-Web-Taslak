import 'server-only';

/**
 * SUNUCU TARAFI — tarayıcıya gitmez.
 * Bu dosyayı yalnızca API route / server kodundan import edin.
 *
 * Web3Forms: https://web3forms.com → Create Access Key
 * 1) contact → info@ozunlu.com
 * 2) sales   → satisdestek@ozunlu.com
 */
export const WEB3FORMS_ACCESS_KEYS = {
    contact: '', // info@ozunlu.com access key
    sales: '', // satisdestek@ozunlu.com access key
} as const;

export type FormChannel = keyof typeof WEB3FORMS_ACCESS_KEYS;

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
