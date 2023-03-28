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
// Rotas para as requisições de 'questoes'.
const questoesControl = require('./questoesControl');
router.get("/questoes/", questoesControl.getAll);
router.get("/questoes/:id", questoesControl.getOne);
router.post("/questoes/", bodyParser, questoesControl.post);
router.put("/questoes/:id", bodyParser, questoesControl.put);
router.delete("/questoes/:id", questoesControl.delete);

// Rotas para as requisições de 'simulados'.
const simuladosControl = require('./simuladosControl');
router.get("/adm/simulados/", simuladosControl.getAll);
router.get("/adm/simulados/:id", simuladosControl.getOne);
router.post("/adm/simulados/", bodyParser, simuladosControl.post);
router.put("/adm/simulados/:id", bodyParser, simuladosControl.put);
router.delete("/adm/simulados/:id", simuladosControl.delete);


// Exporta o módulo
module.exports = router;


