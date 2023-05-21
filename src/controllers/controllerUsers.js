const { serviceUsers } = require('../services/serviceUsers');
const { httpstatuscode } = require('../util/httpstatuscode');

const controllerUsers = {
  /** @type {import('express').RequestParamHandler}*/
  postUsers: async (req, res, next) => {
    try {
      await serviceUsers.postUsers(req.body);
      return res.status(httpstatuscode.CREATED).json({message: "User Registred Sucessfully !!"});   
    } catch (error) {
      if (error.sqlMessage.includes("Duplicate")) next('DUPLICATE_USER')
      next(error);
    }
  },
}

module.exports = { controllerUsers }