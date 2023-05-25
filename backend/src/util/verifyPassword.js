const bcrypt = require('bcrypt');

const verifyPassword = (password, hashPassword, salt) => {
  if (bcrypt.hashSync(password, salt) === hashPassword) return true;
  return false;
}

module.exports = { verifyPassword };
