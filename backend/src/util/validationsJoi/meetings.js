const { httpstatuscode } = require("../httpstatuscode");
const Joi = require("joi");

const schemaMeetings = {
  validationMeetings: async (body) => {
    const schema = Joi.object({
      username: Joi.string()
        .min(3)
        .required()
        .messages({
          "string.min": `${httpstatuscode.BAD_REQUEST}|User must be at least 3 Characters`,
          "string.empty": `${httpstatuscode.BAD_REQUEST}|Field "username" is mandatory`,
        }),
      spokenLanguages: Joi.string()
        .required()
        .messages({
          "string.empty": `${httpstatuscode.BAD_REQUEST}|Field "spoken languages" is Mandatory`,
        }),
      city: Joi.string()
        .required()
        .messages({
          "string.empty": `${httpstatuscode.BAD_REQUEST}|Field "city" is Mandatory`,
        }),
      freeTime: Joi.string()
        .required()
        .messages({
          "string.empty": `${httpstatuscode.BAD_REQUEST}|Field "freeTime" is Mandatory`,
        }),
      date: Joi.date()
      .required()
      .messages({
        "any.required": `${httpstatuscode.BAD_REQUEST}|Field "date" is Mandatory`,
      }),
    });
    await schema.validateAsync(body);
  },
};

module.exports = { schemaMeetings };
