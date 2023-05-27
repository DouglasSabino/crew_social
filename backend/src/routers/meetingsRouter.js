const { controllerMeetings } = require('../controllers/controllerMeetings');
const { handlerTokenValidation } = require('../middlewares/handlerTokenValidation');
const express = require('express');
const { Router } = express;

const meetingsRouter = Router();

meetingsRouter.post('/', controllerMeetings.postMeeting);

meetingsRouter.get('/', controllerMeetings.getMeeting);
meetingsRouter.get('/username', controllerMeetings.getMeetingByUser);

meetingsRouter.delete('/', handlerTokenValidation, controllerMeetings.deleteMeeting);

module.exports = { meetingsRouter };
