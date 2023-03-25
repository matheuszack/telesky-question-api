const conn = require('../model/mysql');

const perguntasValidador = require('../model/perguntasValidador');

const perguntasControl ={
    getAll: async (req, res) => {
        try {
            const [rows] =
            await conn.query("SELECT * FROM perguntas");
            res.json({
            data: rows });
        } catch (error) {
            res.json({   status: 
            "error",
             message: 
             error });
        }
    },
 getOne: async (req, res) => {
   try {
       var id = req.
       params.id;
       if ((id.match(/user=/))) {
            var [rows] 
            = await 
            conn.query("SELECT * FROM perguntas WHERE cadastro_id =?", [id.replace("user=", "")]);


       } else {
        var [rows] = await conn.query ("SELECT * FROM perguntas WHERE pergunta_id = ?", [id]);
       };
       res.json({ 
       data: rows });
   } catch (error) {
    res.json ({
        status:
        "error",
        message:
        error })
   }


 },

 post: async (req, res) => {
    try {
        const { pergunta_titulo, pergunta_informacao,pergunta_ultima_edicao,
        cadastro_id } = req.body;
        // VALIDAR DADOS
        const erro_validadar = perguntasValidador(pergunta_titulo, pergunta_informacao,pergunta_ultima_edicao,
            cadastro_id);
        if (!(erro_validadar == "VALIDACAO_OK")) {
            return res.json({ "status": "error", "message": erro_validadar });
        }

        const sql = "INSERT INTO perguntas ( pergunta_titulo, pergunta_informacao,pergunta_ultima_edicao,cadastro_id) VALUES (?, ?, ?, ?)";
        const [rows] = await conn.query(sql, [pergunta_titulo, pergunta_informacao,pergunta_ultima_edicao, cadastro_id]);
        res.json({ 
        data: rows });
    } catch (error) {
        res.json({ 
            status: "error", message: error });
    }
},
put: async (req, res) => {
    try {
        const { pergunta_titulo, pergunta_informacao,pergunta_ultima_edicao, cadastro_id, } = req.body;
        const { id } = req.params;
        // VALIDAR DADOS
        const erro_validadar =  perguntasValidador(pergunta_titulo, pergunta_informacao,pergunta_ultima_edicao, cadastro_id);
        if (!(erro_validadar == "VALIDACAO_OK")) {
            return res.json({ "status": "error", "message": erro_validadar });
        }

        const sql = "UPDATE perguntas SET pergunta_titulo = ?, pergunta_informacao, = ?,pergunta_ultima_edicao = ?, cadastro_id= ? WHERE pergunta_id = ?"
        const [rows] = await conn.query(sql, [pergunta_titulo, pergunta_informacao,pergunta_ultima_edicao, cadastro_id, id]);
        res.json({ data: rows });
    } catch (error) {
        res.json({ status: "error", message: error });
    }
},
delete: async (req, res) => {
    try {
        const { id } = req.params
        const sql = "DELETE FROM perguntas WHERE pergunta_id = ?"
        const [rows] = await conn.query(sql, [id]);
        res.json({ data: rows });
    } catch (error) {
        res.json({ status: "error", message: error });
    }
}


};

module.exports = perguntasControl;