var http = require('http');
var APP_PRIVATE_IP_ADDRESS = 'localhost';
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8081, APP_PRIVATE_IP_ADDRESS);
console.log('Server running at http://'+APP_PRIVATE_IP_ADDRESS+':8081/');
