const { httpstatuscode } = require('../util/httpstatuscode');
const Joi = require('joi');

const knowErros = {
  DUPLICATE_USER: { code: httpstatuscode.BAD_REQUEST, message: "username already used" },
  USER_NOT_EXIST: { code: httpstatuscode.NOT_FOUND, message: "user not registred" }
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
