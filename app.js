'use strict';

const http      = require('http');
const port      = 5001;
const server    = http.createServer((req, res) => {
    res.statusCode  = 200;
    res.end('Hola Mundo!\n');
});

server.listen(port, ()=> {
    console.log("El Servidor se esta ejecutando en: localhost:"+port);
});

