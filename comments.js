// create web server
// create a new server
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    res.write('GET request to /comments');
    res.end();
  } else if (req.url === '/comments' && req.method === 'POST') {
    res.write('POST request to /comments');
    res.end();
  } else {
    res.write('404 Not Found');
    res.end();
  }
});
// listen on port 3000
server.listen(3000);