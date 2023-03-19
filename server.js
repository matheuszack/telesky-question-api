const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())


// Adicione rotas para as operações CRUD aqui

const port = 3000
app.listen(port, () => {
  console.log(`API CRUD rodando na porta ${port}`)
})
