const { serviceMeetings } = require('../services/serviceMeetings');
const { httpstatuscode } = require('../util/httpstatuscode');

const controllerMeetings = {
/** @type {import('express').RequestParamHandler} */
postMeeting: async (req, res, next) => {
  try {
    await serviceMeetings.postMeeting(req.body);
    return res.status(httpstatuscode.CREATED).json({message: "User Created Succesfully"});
  } catch (error) {
    console.log(error);
    next(error);    
  }
},
}

module.exports = { controllerMeetings };
