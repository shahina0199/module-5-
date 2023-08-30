const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const { method, url } = req;
  
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is Home Page\n');
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is About Page\n');
  } else if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is Contact Page\n');
  } else if (url === '/file-write') {
    fs.writeFile('demo.txt', 'hello world', (err) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error writing to file\n');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('File "demo.txt" created and text written\n');
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
