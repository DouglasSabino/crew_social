const { makeToken } = require('../util/makeToken');

/** @type {import('express').RequestHandler} */
const handlerTokenValidation = async (req, _res, next) => {
  const { authorization: userToken } = req.headers;
  if (!userToken) return next('INVALID_TOKEN');
  try {
    const decodedUser = makeToken.decoder(userToken);
    req.username = decodedUser.payload;
  } catch (error) {
    return next('INVALID_TOKEN');
  }
  return next();
};

module.exports = { handlerTokenValidation };