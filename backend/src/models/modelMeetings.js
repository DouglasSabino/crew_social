const { db } = require('../models/connection');

const modelMeetings = {
  postMeeting: async (body) => {
    const { name, spokenLanguages, city, freeTime } = body;
  },
};

module.exports = { modelMeetings };
