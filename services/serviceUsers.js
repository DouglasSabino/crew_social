const { modelUsers } = require('../models/modelUsers');

const serviceUsers = {
  postUsers: async (body) => {
    await modelUsers.postUsers(body);
  }
}

module.exports = { serviceUsers };
