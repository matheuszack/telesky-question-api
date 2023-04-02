
const conn = require('../model/mysql');

const simuladosValidador = require('../model/simuladosValidador');

const simuladosControl = {

    // Lista todos os registros válidos.
    getAll: async (req, res) => {
        try {
            const [rows] = await conn.query("SELECT * FROM simulados");
            res.json({ data: rows });
        } catch (error) {
            res.json({ status: "error", message: error });
        }
    },

    // Lista um registro único pelo Id.
    getOne: async (req, res) => {
        try {
            var id = req.params.id;
            if ((id.match(/user=/))) {
                var [rows] = await conn.query("SELECT * FROM simulados WHERE cadastro_id = ?", [id.replace("user=", "")]);
            } else {
                var [rows] = await conn.query("SELECT * FROM simulados WHERE simulado_id = ?", [id]);
            };
            res.json({ data: rows });
        } catch (error) {
            res.json({ status: "error", message: error });
        }
    },

    // Insere um novo registro.
    post: async (req, res) => {
        try {
            const { simulado_titulo, simulado_questao, simulado_opcao_1, simulado_opcao_2, simulado_opcao_3, simulado_opcao_4, simulado_resolucao, cadastro_id } = req.body;
            // VALIDAR DADOS
            const erro_validadar = simuladosValidador(simulado_titulo, simulado_questao, simulado_opcao_1, simulado_opcao_2, simulado_opcao_3, simulado_opcao_4, simulado_resolucao, cadastro_id);
            if (!(erro_validadar == "VALIDACAO_OK")) {
                return res.json({ "status": "error", "message": erro_validadar });
            }

            const sql = "INSERT INTO simulados ( simulado_titulo, simulado_questao, simulado_opcao_1, simulado_opcao_2, simulado_opcao_3, simulado_opcao_4, simulado_resolucao, cadastro_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
            const [rows] = await conn.query(sql, [simulado_titulo, simulado_questao, simulado_opcao_1, simulado_opcao_2, simulado_opcao_3, simulado_opcao_4, simulado_resolucao, cadastro_id]);
            res.json({ data: rows });
        } catch (error) {
            res.json({ status: "error", message: error });
        }
    },

    // Edita o registro pelo Id.
    put: async (req, res) => {
        try {
            const { simulado_titulo, simulado_questao, simulado_opcao_1, simulado_opcao_2, simulado_opcao_3, simulado_opcao_4, simulado_resolucao, cadastro_id, } = req.body;
            const { id } = req.params;
            // VALIDAR DADOS
            const erro_validadar = simuladosValidador(simulado_titulo, simulado_questao, simulado_opcao_1, simulado_opcao_2, simulado_opcao_3, simulado_opcao_4, simulado_resolucao, cadastro_id);
            if (!(erro_validadar == "VALIDACAO_OK")) {
            return res.json({ "status": "error", "message": erro_validadar });
            }
            const sql = "UPDATE simulados SET simulado_titulo=?, simulado_questao=?, simulado_opcao_1=?, simulado_opcao_2=?, simulado_opcao_3=?, simulado_opcao_4=?, simulado_resolucao=?, cadastro_id=? WHERE simulado_id=?";
            const [rows] = await conn.query(sql, [simulado_titulo, simulado_questao, simulado_opcao_1, simulado_opcao_2, simulado_opcao_3, simulado_opcao_4, simulado_resolucao, cadastro_id, id]);
            res.json({ data: rows });
            } catch (error) {
            res.json({ status: "error", message: error });
            }
            },
            // Remove o registro pelo Id.
delete: async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await conn.query("DELETE FROM simulados WHERE simulado_id = ?", [id]);
        res.json({ data: rows });
    } catch (error) {
        res.json({ status: "error", message: error });
    }
}
};

module.exports = simuladosControl;
