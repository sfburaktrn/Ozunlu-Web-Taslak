import { generateLlmsTxt } from '@/content/llms';

export const dynamic = 'force-static';
export const revalidate = 86400;

export async function GET() {
    return new Response(generateLlmsTxt(), {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
    });
}
