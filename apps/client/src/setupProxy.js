const { createProxyMiddleware } = require('http-proxy-middleware')
const url = require('url')

module.exports = function (app) {
  const proxy = createProxyMiddleware({
    target: url.format({
      hostname: 'localhost',
      port: 3001,
      protocol: 'http',
    }),
  })

  app.use('/api', proxy)
  app.use('/foo', proxy)
}
