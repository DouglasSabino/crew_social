const { serviceMeetings } = require("../services/serviceMeetings");
const { httpstatuscode } = require("../util/httpstatuscode");
const { schemaMeetings } = require("../util/validationsJoi/meetings");

const controllerMeetings = {
  /** @type {import('express').RequestParamHandler} */
  postMeeting: async (req, res, next) => {
    try {
      await schemaMeetings.validationMeetings(req.body);
      await serviceMeetings.postMeeting(req.body);
      return res.status(httpstatuscode.CREATED)
      .json({ message: "meet created sucessfully" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};

module.exports = { controllerMeetings };
