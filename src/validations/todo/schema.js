const Joi = require('joi');

exports.createTodo = Joi.object({
  title: Joi.string().required(),
});

exports.updateTodo = Joi.object({
  title: Joi.string().required(),
});
