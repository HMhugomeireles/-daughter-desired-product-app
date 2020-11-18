const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require("http-proxy-middleware")

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const apiPaths = {
    '/1': {
        target: 'http://localhost:9901',
        changeOrigin: true
    },
    // '/api2': {
    //     target: jk'http://localhost:3081', 
    //     pathRewrite: {
    //         '^/api2': '/api'
    //     },
    //     changeOrigin: true
    // }
}

const isDevelopment = process.env.NODE_ENV !== 'production'

app.prepare().then(() => {
  const server = express()
 
  if (isDevelopment) {
    //server.use(['/api','/api2'], createProxyMiddleware(apiPaths['/api']));
    server.use('/product', createProxyMiddleware(apiPaths['/1']));
  }

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
}).catch(err => {
    console.log('Error:::::', err)
})