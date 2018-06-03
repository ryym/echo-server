const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log(`receive: ${req.url}`);
  res.end(`${req.url}\n`);
});

const port = process.env.PORT || '8080';
server.listen(port);

console.log(`Server started on ${port}`);
