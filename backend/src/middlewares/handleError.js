const { httpstatuscode } = require('../util/httpstatuscode');
const Joi = require('joi');

const knowErros = {
  INVALID_TOKEN: { code: httpstatuscode.UNAUTHORIZED, message: "please login" },
  NOT_SPOKEN_LANGUAGES: { code: httpstatuscode.BAD_REQUEST, message: "Please say the languages you speak " },
  DUPLICATE_USER: { code: httpstatuscode.BAD_REQUEST, message: "username already used" },
  USER_NOT_EXIST: { code: httpstatuscode.UNAUTHORIZED, message: "invalid credentials" }
};

/** @type {import('express').ErrorRequestHandler} */
const middlewareError = (err, _req, res, _next) => {
  if(Joi.isError(err)) {
    const [code, message] = err.message.split('|');
    return res.status(Number(code)).json(message);
  }

  const error = knowErros[err];
  if(error) return res.status(error.code).json(`${error.message}`);
  return res.status(httpstatuscode.INTERNAL_SERVER).json(`Internal Server Error`);
}

module.exports = { middlewareError };
