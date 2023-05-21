const Joi = require('joi');

const knowErros = {
  DUPLICATE_USER: { code: 400, message: "username already used" },
};

/** @type {import('express').ErrorRequestHandler} */
const middlewareError = (err, _req, res, _next) => {
  if(Joi.isError(err)) {
    const [code, message] = err.message.split('|');
    return res.status(Number(code)).json(message);
  }

  const error = knowErros[err];
  if(error) return res.status(error.code).json(`${error.message}`);
  return res.status(500).json(`Internal Server Error`);
}

module.exports = { middlewareError };
