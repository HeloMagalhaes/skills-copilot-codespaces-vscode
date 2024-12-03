// create web server and listen to port 3000
// 1. create a web server
// 2. listen to port 3000
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');

var server = http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    var filePath = path.join(__dirname, pathname);

    fs.exists(filePath, function(exists) {
        if (exists) {
            fs.readFile(filePath, function(err, data) {
                res.end(data);
            });
        } else {
            res.statusCode = 404;
            res.end('404 Not Found');
        }
    });
});

server.listen(3000, function() {
    console.log('server is listening on port 3000');
});
