var os = require('os');
var http = require('http');


console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.arch())

function responseHandler(req,res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World\n Greeting from Osman');
};
http.createServer(responseHandler).listen(1337,'127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');