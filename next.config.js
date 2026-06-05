const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    compress: true,
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    experimental: {
        optimizePackageImports: ['framer-motion', 'lucide-react'],
    },
    async headers() {
        const cacheOneYear = 'public, max-age=31536000, immutable';
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
                ],
            },
            {
                source: '/:path*.(mp4|webm|webp|jpg|jpeg|png|gif|svg|ico|woff2)',
                headers: [{ key: 'Cache-Control', value: cacheOneYear }],
            },
        ];
    },
};

module.exports = withNextIntl(nextConfig);
