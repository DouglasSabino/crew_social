const { modelMeetings } = require("../models/modelMeetings");
const { makeSerial } = require("../util/cuid");

const serviceMeetings = {
  postMeeting: async (body) => {
    const { username, spokenLanguages, city, freeTime } = body;
    const [id] = makeSerial();
    const post = { id, username, spokenLanguages, city, freeTime };
    await modelMeetings.postMeeting(post);
  },
  getMeeting: async () => {
    const meetings = await modelMeetings.getMeeting();
    return meetings; 
  },
  getMeetingByUser: async (body) => {
    const { username } = body; 
    const meeting = await modelMeetings.getMeetingByUser(username);
    return meeting;
  },
  deleteMeeting: async (body) => {
    const { id } = body;
    await modelMeetings.deleteMeeting(id);
  }
};

module.exports = { serviceMeetings };
