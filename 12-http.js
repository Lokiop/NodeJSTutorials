const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our Home page");
        return
    }
    if (req.url === '/about') {
        res.end('Here is our short history');
        return
    }
    res.end(`
        <h1>OOps!!!</h1>
        <p>We can't find the page you are looing for</p>
        <a href="/">Back Home</a?
    `)
})

server.listen(5000)