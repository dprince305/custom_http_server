const http = require('http');

PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1>Hello Welcome To Nodejs</h1>");
    } else if (req.url == '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end("<h2>Hello Welcome To About</h2>");
    } else if (req.url == '/about/contact') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end("<h1>Hello Welcome To Contact</h1>");
    } else {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/html');
        res.end("<h2>404 , Page not Found</h2>");
    }
})

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})