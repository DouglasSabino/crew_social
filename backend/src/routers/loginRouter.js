const { controllerLogin } = require('../controllers/controllerLogin');
const { handlerTokenValidation } = require('../middlewares/handlerTokenValidation');
const express = require('express');
const { Router } = express;

const loginRouter = Router();

loginRouter.post('/', controllerLogin.Login);

loginRouter.post('/validateToken', handlerTokenValidation, controllerLogin.validateToken );

module.exports = { loginRouter };
