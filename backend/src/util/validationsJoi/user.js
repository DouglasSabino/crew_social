const { httpstatuscode } = require("../httpstatuscode");
const Joi = require("joi");

const schemaUser = {
  validationUser: async (body) => {
    const schema = Joi.object({
      username: Joi.string()
        .min(3)
        .required()
        .messages({
          "string.min": `${httpstatuscode.BAD_REQUEST}|User must be at least 3 Characters`,
          "string.empty": `${httpstatuscode.BAD_REQUEST}|Field "username" is mandatory`,
        }),
      // https://pt.stackoverflow.com/questions/373574/regex-para-senha-forte
      // Link para ajuda (Joi + Regex)
      password: Joi.string()
        .required()
        .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/)
        .messages({
          "string.pattern.base": `${httpstatuscode.BAD_REQUEST}|The "password" must be 8 digits, including uppercase, lowercase and numbers`,
          "string.empty": `${httpstatuscode.BAD_REQUEST}|Field "password" is Mandatory`,
        }),
      spokenLanguages: Joi.string()
        .required()
        .messages({
          "string.empty": `${httpstatuscode.BAD_REQUEST}|Field "spoken languages" is Mandatory`,
        }),
    });
    await schema.validateAsync(body);
  },
};

module.exports = { schemaUser };
