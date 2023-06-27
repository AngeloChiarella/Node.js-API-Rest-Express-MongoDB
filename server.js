const http = require("http"); //utilizar modulo nativo
const port = 3000;

const server = http.createServer((req, res) => { //criar o servidor
    res.writeHead(200, { 'Context-type': 'text/plain' }); // cabecalho, status 200
    res.end('Curso de Node');
});

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});