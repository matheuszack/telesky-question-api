const express = require('express');
const bodyParser = require('body-parser').json();
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        status: "error",
        message: "Bad request"
    });
});

const cadastroControl = require('./cadastroControl');
router.get("/cadastro/", cadastroControl.getAll);
router.get("/cadastro/:id", cadastroControl.getOne);
router.post("/cadastro/", bodyParser,cadastroControl.post);
router.put("/cadastro/:id", bodyParser, cadastroControl.put);
router.delete("/cadastro/:id",cadastroControl.delete);

// Rotas para as requisições de 'perguntas'.
const perguntasControl = require('./perguntasControl');
router.get("/perguntas/", perguntasControl.getAll);
router.get("/perguntas/:id", perguntasControl.getOne);
router.post("/perguntas/", bodyParser, perguntasControl.post);
router.put("/perguntas/:id", bodyParser, perguntasControl.put);
router.delete("/perguntas/:id", perguntasControl.delete);
