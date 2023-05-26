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
      next(error);
    }
  },
  /** @type {import('express').RequestParamHandler} */
  getMeeting: async (_req, res, next) => {
    try {
      const meetings = await serviceMeetings.getMeeting();
      return res.status(httpstatuscode.OK).json(meetings);
    } catch (error) {
      next(error);
    }
  },
  getMeetingByUser: async (req, res, next) => {
    try {
      const meeting = await serviceMeetings.getMeetingByUser(req.body);
      return res.status(httpstatuscode.OK).json(meeting);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = { controllerMeetings };
