/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "static.wixstatic.com",
            'picsum.photos',
            'res.cloudinary.com',
            'imagedelivery.net',
            'customer-8p6222sl725afjta.cloudflarestream.com',
            'cdn.tuoitre.vn',
            'www.vietnam.vn'
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wanderlusttips.asia',
            },
        ],
    },
};

export default nextConfig;
