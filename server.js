const http = require("http"); //utilizar modulo nativo
const port = 3000;

const rotas = { // Renderizacao de paginas
    '/': 'Curso de Node',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Listagem de autores',
    '/editora' : 'Pag de editora',
    '/sobre':'Info sobre projeto',
};

const server = http.createServer((req, res) => { //criar o servidor
    res.writeHead(200, { 'Context-type': 'text/plain' }); // cabecalho, status 200
    res.end(rotas[req.url]);
});

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});