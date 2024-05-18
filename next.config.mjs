
import createMDX from '@next/mdx'
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "hnm.1cdn.vn",
            "i1-dulich.vnecdn.net",
            "i1-ngoisao.vnecdn.net",
            "bvhttdl.mediacdn.vn",

        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wanderlusttips.asia'
            },
            {
                protocol: 'https',
                hostname: "vntravel.org.vn"
            },
            {
                protocol: 'https',
                hostname: "www.vtr.org.vn"
            },
        ],
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};


const withMDX = createMDX({
    // Add markdown plugins here, as desired
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)


