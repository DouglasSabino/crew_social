const { db } = require("../models/connection");

const modelMeetings = {
  postMeeting: async (post) => {
    const { id, username, spokenLanguages, city, freeTime, date } = post;
    const SQL_POST_MEETING =
    "INSERT INTO meetings (id, username, spokenLanguages, city, freeTime, date) VALUES (?,?,?,?,?,?)";
    await db.execute(SQL_POST_MEETING, [ id, username, spokenLanguages, city, freeTime, date ]);
  },
  getMeeting: async () => {
    const SQL_GET_MEETING = "SELECT * FROM meetings";
    const [meetings] = await db.execute(SQL_GET_MEETING);
    return meetings;
  },
  getMeetingByUser: async (username) => {
    const SQL_GET_MEETING_BY_USERNAME = "SELECT * FROM meetings WHERE username=?";
    const [meeting] = await db.execute(SQL_GET_MEETING_BY_USERNAME, [username]);
    return meeting;
  },
  deleteMeeting: async (id) => {
    const SQL_DELETE_METTING = "DELETE FROM meetings WHERE id=?";
    await db.execute(SQL_DELETE_METTING, [id]);  
  },
};

module.exports = { modelMeetings };
