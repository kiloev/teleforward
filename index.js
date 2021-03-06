/*jshint esversion: 6 */

const http = require('http');
const forward = require('http-forward');

var server = http.createServer(function (req, res) {
  req.forward = {
    target: process.env.REDIRECT_TARGET,
    changeOrigin: true
  };
  forward(req, res);
});

server.listen(process.env.PORT || 3000);
