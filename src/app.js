import express from "express";

const app = new express();

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

export default app