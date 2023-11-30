const Joi = require('joi');

exports.createTask = Joi.object({
  taskName: Joi.string().required(),
});

exports.updateTask = Joi.object({
  taskName: Joi.string().required(),
  status: Joi.string().optional(),
});
