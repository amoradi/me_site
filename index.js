const http = require('http')
const fs = require('fs')
const sslRedirect = require("heroku-ssl-redirect").default;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
})

server.use(sslRedirect());

server.listen(process.env.PORT || 3000);
