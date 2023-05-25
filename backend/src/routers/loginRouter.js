const { controllerLogin } = require('../controllers/controllerLogin');
const express = require('express');
const { Router } = express;

const loginRouter = Router();

loginRouter.post('/', controllerLogin.Login);

module.exports = { loginRouter };
