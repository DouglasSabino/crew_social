const express = require('express');
require('dotenv').config();
const { middlewareError } = require('../middlewares/handleError');
const { usersRouter } = require('../routers/usersRouter');
const { PORT } = process.env;

const app = express();
app.use(express.json());

app.use('/users', usersRouter);
app.use(middlewareError);

app.get('/', (_req, res) => {
  res.status(200).json("Tudo Certo :D");
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));