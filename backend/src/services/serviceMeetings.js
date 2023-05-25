const { modelMeetings } = require('../models/modelMeetings');
const { makeSerial } = require('../util/cuid');

const serviceMeetings = { 
  postMeeting: async (body) => {
    const { name, spokenLanguages, city, freeTime } = body;
    const [id] = makeSerial();
    const post = { id, name, spokenLanguages, city, freeTime }; 
    await modelMeetings.postMeeting(post);
  },
}

module.exports = { serviceMeetings }
