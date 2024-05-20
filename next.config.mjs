import { build } from 'velite';

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'hnm.1cdn.vn',
			'i1-dulich.vnecdn.net',
			'i1-ngoisao.vnecdn.net',
			'bvhttdl.mediacdn.vn',
			'static.wixstatic.com',
			'picsum.photos',
			'res.cloudinary.com',
			'imagedelivery.net',
			'customer-8p6222sl725afjta.cloudflarestream.com',
			'cdn.tuoitre.vn',
			'www.vietnam.vn',
			'hnm.1cdn.vn',
			'i1-dulich.vnecdn.net',
			'i1-ngoisao.vnecdn.net',
			'bvhttdl.mediacdn.vn',
			'cdn3.ivivu.com',
			'comly.vn',
			'toquoc.mediacdn.vn',
			'cafefcdn.com',
		],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'wanderlusttips.asia',
			},
			{
				protocol: 'https',
				hostname: 'vntravel.org.vn',
			},
			{
				protocol: 'https',
				hostname: 'www.vtr.org.vn',
			},
			{
				protocol: 'https',
				hostname: 'cdn.tuoitre.vn',
			},
			{
				protocol: 'https',
				hostname: 'media.vov.vn',
			},
			{
				protocol: 'https',
				hostname: 'cdn3.ivivu.com',
			},
			{
				protocol: 'https',
				hostname: 'comly.vn',
			},
			{
				protocol: 'https',
				hostname: 'toquoc.mediacdn.vn',
			},
		],
	},
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	webpack: (config) => {
		config.plugins.push(new VeliteWebpackPlugin());
		return config;
	},
};

class VeliteWebpackPlugin {
	static started = false;
	apply(compiler) {
		compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
			if (VeliteWebpackPlugin.started) return;
			VeliteWebpackPlugin.started = true;
			const dev = compiler.options.mode === 'development';
			await build({ watch: dev, clean: !dev });
		});
	}
}
// Merge MDX config with Next.js config
export default nextConfig;
