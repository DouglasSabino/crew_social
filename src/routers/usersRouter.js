const { controllerUsers } = require('../controllers/controllerUsers');
const express = require('express');
const { Router } = express;

const usersRouter = Router();

usersRouter.post('/register', controllerUsers.postUsers);

module.exports = { usersRouter };
