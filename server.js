const express = require('express');
const app = express();
const cors = require('cors');
const port = conf.HTTPPORT|| 3000;

app.use(cors())

const appRouter =  require ('./src/controller/router')

app.use(appRouter);

app.listen(port, () => {
  console.log(`API CRUD rodando na porta ${port}`)
})
