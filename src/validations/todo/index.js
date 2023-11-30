const { createTodo, updateTodo } = require('./schema');

const { VALIDATION_ERR } = require('../../constants/errorType');
const InvariantError = require('../../exeptions/invariantError');

const todoValidation = {
  validateCreateTodo: (payload) => {
    const validationResult = createTodo.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message, {
        type: VALIDATION_ERR,
      });
    }
  },

  validateUpdateTodo: (payload) => {
    const validationResult = updateTodo.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message, {
        type: VALIDATION_ERR,
      });
    }
  },
};

module.exports = todoValidation;
