const { modelLogin } = require('../models/modelLogin');
const bcrypt = require('bcrypt');

const serviceLogin = {
  Login: async (body) => {
    const { username, password } = body;
    const user = await modelLogin.Login(username);
    if (user !== undefined) {
      if (bcrypt.hashSync(password, user.salt) === user.hash) return user;
    }
    return undefined;
  },
}

module.exports = { serviceLogin };
