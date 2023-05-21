const { db } = require('./connection');

const modelUsers = {
  postUsers: async (body) => {
    const { id, username, password, hash } = body;
    const SQL_POST_USERS = "INSERT INTO users(id, username, password, hash) VALUES (?,?,?,?)"
    await db.execute(SQL_POST_USERS, [id, username, password, hash]);
  },
}

module.exports = { modelUsers };
