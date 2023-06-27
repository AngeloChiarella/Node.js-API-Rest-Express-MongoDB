import express from "express";
import db from "./config/dbConnetc.js";
import livros from "./models/livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexao"))
db.once("open", () => {
    console.log("Conexao com banco feita com sucesso")
})

const app = new express();

app.use(express.json()) // interpretar oo que chega e transformar em um obj

routes(app);

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);//devolve somente o usuario do id
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso!')
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

app.delete('/livros/:id', (req, res) => {
    let { id } = req.params;
    let index = buscaLivro(id);
    livros.splice(index, 1)
    res.status(200).send(`Livro ${id} removido com sucesso!`)
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app