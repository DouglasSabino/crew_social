const { modelLogin } = require('../models/modelLogin');
const { makeToken } = require('../util/makeToken');
const bcrypt = require('bcrypt');

const serviceLogin = {
  Login: async (body) => {
    const { username, password } = body;
    const user = await modelLogin.Login(username);
    if (user !== undefined) {
      if (bcrypt.hashSync(password, user.salt) === user.hash) {
        const { hash, salt, ...rest } = user;
        const token = makeToken.coder(rest);
        return token;
      }
    }
    return undefined;
  },
}

module.exports = { serviceLogin };
