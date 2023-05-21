const { db } = require('./connection');

const modelUsers = {
  postUsers: async (newUser) => {
    const { id, username, hashPassword, salt } = newUser;
    const SQL_POST_USERS = "INSERT INTO users(id, username, password, hash) VALUES (?,?,?,?)"
    await db.execute(SQL_POST_USERS, [id, username, hashPassword, salt]);
  },
}

module.exports = { modelUsers };
