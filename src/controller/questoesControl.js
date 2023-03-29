
const conn = require('../model/mysql');

const questoesValidador = require('../model/questoesValidador');



const questoesControl = {


// Lista todos os registros válidos.
getAll: async (req, res) => {
    try {
        const [rows] = await conn.query("SELECT * FROM questoes");
        res.json({ data: rows });
    } catch (error) {
        res.json({ status: "error", message: error });
    }
},

// Lista um registro único pelo Id.
getOne: async (req, res) => {
    try {
        var id = req.params.id;
        var [rows] = await conn.query("SELECT * FROM questoes WHERE questao_id = ?", [id]);
        res.json({ data: rows });
    } catch (error) {
        res.json({ status: "error", message: error });
    }
},

// Insere um novo registro.
post: async (req, res) => {
    try {
        const { questao_titulo, questao_opcao, questao_resolucao, cadastro_id } = req.body;
        // VALIDAR DADOS
        const erro_validadar = questoesValidador(questao_titulo, questao_opcao, questao_resolucao, cadastro_id);
        if (!(erro_validadar == "VALIDACAO_OK")) {
            return res.json({ "status": "error", "message": erro_validadar });
        }

        const sql = "INSERT INTO questoes ( questao_titulo, questao_opcao, questao_resolucao, cadastro_id) VALUES (?, ?, ?, ?)";
        const [rows] = await conn.query(sql, [questao_titulo, questao_opcao, questao_resolucao, cadastro_id]);
        res.json({ data: rows });
    } catch (error) {
        res.json({ status: "error", message: error });
    }
},

// Edita o registro pelo Id.
put: async (req, res) => {
    try {
        const { questao_titulo, questao_opcao, questao_resolucao, cadastro_id, } = req.body;
        const { id } = req.params;
        // VALIDAR DADOS
        const erro_validadar = questoesValidador(questao_titulo, questao_opcao, questao_resolucao, cadastro_id);
        if (!(erro_validadar == "VALIDACAO_OK")) {
            return res.json({ "status": "error", "message": erro_validadar });
        }

        const sql = "UPDATE questoes SET questao_titulo = ?, questao_opcao = ?, questao_resolucao = ?, cadastro_id = ? WHERE questao_id = ?"
        const [rows] = await conn.query(sql, [questao_titulo, questao_opcao, questao_resolucao, cadastro_id, id]);
        res.json({ data: rows });
    } catch (error) {
        res.json({ status: "error", message: error });
    }
},

// Apaga um registro único pelo Id.
delete: async (req, res) => {
    try {
        const { id } = req.params
        const sql = "DELETE FROM questoes WHERE questao_id = ?"
        const [rows] = await conn.query(sql, [id]);
        res.json({ data: rows });
    } catch (error) {
        res.json({ status: "error", message: error });
    }
}
};

// Exporta o módulo.
module.exports = questoesControl;
