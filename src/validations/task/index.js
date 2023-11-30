const { createTask, updateTask } = require('./schema');

const { VALIDATION_ERR } = require('../../constants/errorType');
const InvariantError = require('../../exeptions/invariantError');

const taskValidation = {
  validateCreateTask: (payload) => {
    const validationResult = createTask.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message, {
        type: VALIDATION_ERR,
      });
    }
  },

  validateUpdateTask: (payload) => {
    const validationResult = updateTask.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message, {
        type: VALIDATION_ERR,
      });
    }
  },
};

module.exports = taskValidation;
