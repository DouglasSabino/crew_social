const { db } = require("../models/connection");

const modelMeetings = {
  postMeeting: async (post) => {
    const { id, username, spokenLanguages, city, freeTime } = post;
    console.log(id, username, spokenLanguages, city, freeTime);
    const SQL_POST_MEETING =
    "INSERT INTO meetings (id, username, spokenLanguages, city, freeTime) VALUES (?,?,?,?,?)";
    await db.execute(SQL_POST_MEETING, [ id, username, spokenLanguages, city, freeTime ]);
  },
  getMeeting: async () => {
    const SQL_GET_MEETING = "SELECT * FROM meetings";
    const [meetings] = await db.execute(SQL_GET_MEETING);
    return meetings;
  },
};

module.exports = { modelMeetings };
