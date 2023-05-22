const { modelUsers } = require('../models/modelUsers');
const { makeSerial } = require('../util/cuid');
const bcrypt = require('bcrypt');

const serviceUsers = {
  postUsers: async (body) => {
    const { username, password } = body;
    const [ id ] = makeSerial();
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const newUser = { id, username, hashPassword, salt }
    await modelUsers.postUsers(newUser);
  },
  getUsers: async (body) => {
    const { username } = body;
    const user = await modelUsers.getUsers(username);
    return user;
  },
}

module.exports = { serviceUsers };
