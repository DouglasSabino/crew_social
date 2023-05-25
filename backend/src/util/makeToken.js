const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const makeToken = {
  coder: (payload) => {
    const token = jwt.sign({payload}, JWT_SECRET, { algorithm: 'HS256', expiresIn: '1d' });
    return token;
  },
  decoder: (token) => {
    const tokenDecoded = jwt.verify(token, JWT_SECRET);
    return tokenDecoded;
  }
}

console.log(makeToken.coder({name: "Douglas", idade: 25}));

module.exports = { makeToken };
