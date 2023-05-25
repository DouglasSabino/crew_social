const { db } = require('../models/connection');

const modelMeetings = {
  postMeeting: async (post) => {
    const { id, name, spokenLanguages, city, freeTime } = post;
    const SQL_POST_MEETING = "INSERT INTO meetings (id, name, spokenLanguages, city, freeTime) VALUES (?,?,?,?,?)";
    await db.execute(SQL_POST_MEETING, [id, name, spokenLanguages, city, freeTime]);
  },
};

module.exports = { modelMeetings };
