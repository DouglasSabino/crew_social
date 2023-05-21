const { serviceUsers } = require('../services/serviceUsers');

const controllerUsers = {
  /** @type {import('express').RequestParamHandler}*/
  postUsers: async (req, res, next) => {
    try {
      await serviceUsers.postUsers(req.body);
      return res.status(201).json({message: "User Registred Sucessfully !!"});   
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
}

module.exports = { controllerUsers }