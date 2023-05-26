const { controllerMeetings } = require('../controllers/controllerMeetings');
const express = require('express');
const { Router } = express;

const meetingsRouter = Router();

meetingsRouter.post('/', controllerMeetings.postMeeting);

meetingsRouter.get('/', controllerMeetings.getMeeting);
meetingsRouter.get('/username', controllerMeetings.getMeetingByUser);

module.exports = { meetingsRouter };
