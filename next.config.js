const withOffline = require('next-offline')
const dotenv = require('dotenv')
dotenv.config();

module.exports = withOffline({
	target: process.env.NEXT_TARGET || 'serverless',
	env: {
		DB_URL: process.env.DB_URL,
		LOGO_URL: process.env.LOGO_URL
	},
	workboxOpts: {
		swDest: 'static/service-worker.js',
		runtimeCaching: [
			{
				urlPattern: /[.](png|jpg|ico|css)/,
				handler: 'CacheFirst',
				options: {
					cacheName: 'assets-cache',
					cacheableResponse: {
						statuses: [0, 200]
					}
				}
			},
			{
				urlPattern: /^https:\/\/code\.getmdl\.io.*/,
				handler: 'CacheFirst',
				options: {
					cacheName: 'lib-cache'
				}
			},
			{
				urlPattern: /^http.*/,
				handler: 'NetworkFirst',
				options: {
					cacheName: 'http-cache'
				}
			}
		]
	}
})
