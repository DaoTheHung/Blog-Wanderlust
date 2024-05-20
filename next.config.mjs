import { build } from 'velite'

/** @type {import('next').NextConfig} */
export default {
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
  // othor next config here...
  webpack: config => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  }
}

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