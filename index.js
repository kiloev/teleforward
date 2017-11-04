const http = require('http')
const forward = require('http-forward')

var server = http.createServer(function (req, res) {
  req.forward = { target: process.env.REDIRECT_TARGET }
  forward(req, res)
})

server.listen(3000)
