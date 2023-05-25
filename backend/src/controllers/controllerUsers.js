const { serviceUsers } = require('../services/serviceUsers');
const { httpstatuscode } = require('../util/httpstatuscode');
const { schemaUser } = require('../util/validationsJoi/user');

const controllerUsers = {
  /** @type {import('express').RequestParamHandler}*/
  postUsers: async (req, res, next) => {
    try {
      await schemaUser.validationUser(req.body);
      await serviceUsers.postUsers(req.body);
      return res.status(httpstatuscode.CREATED).json({message: "User Registred Sucessfully !!"});   
    } catch (error) {
      console.log(error);
      if (error.sqlMessage && error.sqlMessage.includes("Duplicate")) 
      return next('DUPLICATE_USER');
      if (error.message.includes("spokenLanguages")){
        return next('NOT_SPOKEN_LANGUAGES');
      }
      else next(error);
    }
  },
  /** @type {import('express').RequestParamHandler} */
  getUsers: async (req, res, next) => {
    try {
      const user = await serviceUsers.getUsers(req.body);
      if (user === undefined) return next('USER_NOT_EXIST');
      return user;
    } catch (error) {
      next(error);
    }
  },
}

module.exports = { controllerUsers }