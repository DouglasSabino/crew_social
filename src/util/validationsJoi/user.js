const { httpstatuscode } = require('../httpstatuscode');
const Joi = require('joi');

const schemaUser = {
  validationUser: async (body) => {
    const schema = Joi.object({
        username: Joi.string().min(3).required().messages({
          "string.min": `${httpstatuscode.BAD_REQUEST}|Usuario deve ter pelo menos 3 Caracteres`,
          "string.empty": `${httpstatuscode.BAD_REQUEST}|Campo "username" é obrigatorio`,
        }),
        // https://pt.stackoverflow.com/questions/373574/regex-para-senha-forte
        // Link para ajuda (Joi + Regex)
        password: Joi.string().required()
        .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/)
        .messages({
          "string.pattern.base": `${httpstatuscode.BAD_REQUEST}|O "password" precise ter 8 digitos, incluindo letras maiusculas, menusculas e numeros`,
          "string.empty": `${httpstatuscode.BAD_REQUEST}|Campo "password" é obrigatorio`
        }),
      });
      await schema.validateAsync(body);
  }
}

module.exports = { schemaUser }