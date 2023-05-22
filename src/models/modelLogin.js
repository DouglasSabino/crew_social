const bcrypt = require('bcrypt');
const { modelUsers } = require('../models/modelUsers');

const modelLogin = {
  Login: async (username) => {
   const user = await modelUsers.getUsers(username);
   return user;
  },
};

module.exports = { modelLogin };
