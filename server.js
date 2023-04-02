
const express = require('express');
const conf = require('dotenv').config().parsed;
const cors = require('cors'); // importa o módulo cors
const app = express();

const port = conf.HTTPPORT|| 6912;

app.use(cors())

const appRouter =  require ('./src/controller/router')

app.use(appRouter);

app.listen(port, () => {
  console.log(`Executando servidor em http://localhost:${port}`)
})
