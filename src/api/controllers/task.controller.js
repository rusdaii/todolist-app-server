const TaskService = require('../../services/task');
const { successResponse } = require('../../lib/response');
const taskValidation = require('../../validations/task');

class TaskController {
  static createTask = async (req, res, next) => {
    try {
      taskValidation.validateCreateTask(req.body);

      const { id: todoId } = req.params;

      const task = await TaskService.createTask(todoId, req.body);

      res.status(201).json(
        successResponse({
          message: 'Create task success',
          data: task,
        })
      );
    } catch (error) {
      next(error);
    }
  };

  static updateTask = async (req, res, next) => {
    try {
      taskValidation.validateUpdateTask(req.body);

      const { todoId, taskId } = req.params;
      const { id: userId } = req.user;

      const task = await TaskService.updateTask(
        todoId,
        taskId,
        userId,
        req.body
      );

      res.status(200).json(
        successResponse({
          message: 'Update task success',
          data: task,
        })
      );
    } catch (error) {
      next(error);
    }
  };

  static deleteTask = async (req, res, next) => {
    try {
      const { todoId, taskId } = req.params;
      const { id: userId } = req.user;

      await TaskService.deleteTask(todoId, taskId, userId);

      res.status(200).json(
        successResponse({
          message: 'Delete task success',
        })
      );
    } catch (error) {
      next(error);
    }
  };
}

module.exports = TaskController;
