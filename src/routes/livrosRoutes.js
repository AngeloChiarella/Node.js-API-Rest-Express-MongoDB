import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router // param1 Rota, param2 Acao, 
    .get("/livros", LivroController.listarLivros)
    .get("/livros/:id", LivroController.listarPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)

export default router;