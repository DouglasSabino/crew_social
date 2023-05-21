const { middlewareError } = require('./middlewares/handleError');
const { usersRouter } = require('./routers/usersRouter');
const { httpstatuscode } = require('./util/httpstatuscode');
const { PORT } = process.env;
const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/users', usersRouter);
app.use(middlewareError);

app.get('/', (_req, res) => {
  res.status(httpstatuscode.OK).json("Tudo Certo :D");
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));