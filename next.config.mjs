import { build } from 'velite'

/** @type {import('next').NextConfig} */
export default {
	basePath: '',
	assetPrefix: '',
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
			'www.vfestival.vn',
			'imagescdn.pystravel.vn',
			'www.onetravel.com',
			'cdn11.dienmaycholon.vn',
			'stcv4.hnammobile.com',
			'ik.imagekit.io',
			'cdn.vntrip.vn',
			'statics.vinwonders.com',
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
			{
				protocol: 'https',
				hostname: 'www.onetravel.com',
			},
			{
				protocol: 'https',
				hostname: 'cdn11.dienmaycholon.vn',
			},
			{
				protocol: 'https',
				hostname: 'vnn-imgs-f.vgcloud.vn',
			},
			{
				protocol: 'https',
				hostname: 'stcv4.hnammobile.com',
			},
			{
				protocol: 'https',
				hostname: 'ik.imagekit.io',
			},
			{
				protocol: 'https',
				hostname: 'cdn.vntrip.vn',
			},
			{
				protocol: 'https',
				hostname: 'statics.vinwonders.com',
			},
			{
				protocol: 'https',
				hostname: 'cdn-i.vtcnews.vn',
			},
			{
				protocol: 'https',
				hostname: 'i1-giadinh.vnecdn.net',
			},
		],
	},

	// othor next config here...
	webpack: (config) => {
		config.plugins.push(new VeliteWebpackPlugin());
		return config;
	},
};

class VeliteWebpackPlugin {
	static started = false
	apply(/** @type {import('webpack').Compiler} */ compiler) {
		// executed three times in nextjs
		// twice for the server (nodejs / edge runtime) and once for the client
		compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
			if (VeliteWebpackPlugin.started) return
			VeliteWebpackPlugin.started = true
			const dev = compiler.options.mode === 'development'
			await build({ watch: dev, clean: !dev })
		})
	}
}