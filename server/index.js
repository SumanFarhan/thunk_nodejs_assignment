var http = require('http');

const Port = 8080
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
}).listen(Port, () => {
    console.log(`connect to ${Port}`);
});