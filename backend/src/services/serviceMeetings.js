const { modelMeetings } = require('../models/modelMeetings');

const serviceMeetings = { 
  postMeeting: async (body) => {
    await modelMeetings.postMeeting(body);
  },
}

module.exports = { serviceMeetings }
