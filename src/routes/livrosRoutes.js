import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router // param1 Rota, param2 Acao, 
    .get("/livros", LivroController.listarLivros)
    .post("/livros", LivroController.cadastrarLivro)

export default router;