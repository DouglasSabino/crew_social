const { serviceLogin } = require('../services/serviceLogin');
const { httpstatuscode } = require('../util/httpstatuscode');

const controllerLogin = {
  /** @type {import('express').RequestParamHandler} */
  Login: async (req, res, next) => {
    try {
      const user = await serviceLogin.Login(req.body);
      if (user === undefined) return next('USER_NOT_EXIST');
      return res.status(httpstatuscode.OK).json(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  /** @type {import ('express').RequestParamHandler} */
  validateToken: async (req, res, next) => {
    try {
      const { user } = req;
      return res.status(httpstatuscode.OK).json(user);
    } catch (error) {
      next(error);
    }
  },
}

module.exports = { controllerLogin };
