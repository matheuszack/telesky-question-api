const conn = require('../model/mysql.js');
const cadastroValidador = require('../model/cadastroValidador');

const cadastroControl = {

    getAll: async (req, res) => {

        try {
            const[rows] = await conn.query("SELECT * FROM cadastro WHERE cadastro_status = 'on'");
            res.json({data:rows});
        }catch (error) {
            res.json({status: "error", message: error});
        }
    },

getOne: async (req, res) => {
    try{
        var id = req.params.id;
        if((id.match(/email=/))) {
            var [rows] = await conn.query("SELECT * FROM cadastro WHERE cadastro_email = ? AND cadastro_status = 'on'", [id.replace("email=", "")]);
        } else {
            var [rows] = await conn.query("SELECT * FROM cadastro WHERE cadastro_id = ? AND cadastro_status = 'on'", [id]);
        };
        res,json({ date: rows});
    } catch (error) {
        res.json({ status:"error", message: error });
    }
},

// Insere um novo registro.
post: async (req, res) => {
    try {
      const { cadastro_nome,  cadastro_email, cadastro_senha } = req.body;
      // VALIDAR DADOS
      const erro_validadar = cadastroValidador(cadastro_nome,cadastro_email, cadastro_senha);

      if (!(erro_validadar == "VALIDACAO_OK")) {
        return res.json({ "status": "error", "message": erro_validadar });
      }

      const sql = "INSERT INTO cadastro (cadastro_nome, cadastro_email, cadastro_senha) VALUES (?, ?, SHA1(?))";
      const [rows] = await conn.query(sql, [cadastro_nome, cadastro_email.toLowerCase(), cadastro_senha]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },
  put: async (req, res) => {
    try {
      const { cadastro_nome,  cadastro_email, cadastro_senha,  cadastro_status } = req.body;
      const { id } = req.params;
      // VALIDAR DADOS
      const erro_validadar =cadastroValidador(cadastro_nome, cadastro_email, cadastro_senha);
      if (!(erro_validadar == "VALIDACAO_OK")) {
        return res.json({ "status": "error", "message": erro_validadar });
      }

      const sql = "UPDATE cadastros SET cadastro_nome = ?, cadastro_email = ?, cadastro_senha = SHA1(?), cadastro_status = ? WHERE cadastro_id = ?"
      const [rows] = await conn.query(sql, [cadastro_nome, cadastro_email.toLowerCase(), cadastro_senha,  cadastro_status, id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  },

// Altera para 'del' um registro único pelo Id.
delete: async (req, res) => {
    try {
      const { id } = req.params
      const sql = "UPDATE cadastros SET cadastro_status = 'del' WHERE cadastro_id = ?"
      const [rows] = await conn.query(sql, [id]);
      res.json({ data: rows });
    } catch (error) {
      res.json({ status: "error", message: error });
    }
  }
};

// Exporta o módulo.
module.exports = cadastroControl;












