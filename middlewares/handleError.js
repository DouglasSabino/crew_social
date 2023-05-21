const Joi = require('joi');

const knowErros = {
    ERROR_NAME: { code: 000, message: "ERROR MESSAGE" },
};

/** @type {import('express').ErrorRequestHandler} */
const middlewareError = (err, _req, res, _next) => {
  if(Joi.isError(err)) {
    const [code, message] = err.message.split('|');
    return res.status(Number(code)).json(message);
  }

  const error = knowErros[err];
  if(error) return res.status(error.code).json(`message: ${error.message}`);
  return res.status(500).json(`Internal Server Error`);
}

module.exports = { middlewareError };
