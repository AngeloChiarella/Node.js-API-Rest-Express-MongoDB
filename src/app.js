import express from "express";

const app = new express();

app.use(express.json()) // interpretar oo que chega e transformar em um obj

const livros = [
    { id: 1, "titulo": "Senhor dos anéis" },
    { id: 2, "titulo": "O Hobiit" }
]

app.get('/', (req, res) => {
    res.status(200).send("Curso de Node");
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso!')
})

export default app