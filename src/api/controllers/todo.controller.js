const TodoService = require('../../services/todo');
const { successResponse } = require('../../lib/response');
const todoValidation = require('../../validations/todo');

class TodoController {
  static getTodos = async (req, res, next) => {
    try {
      const user = req.user;

      const todos = await TodoService.getAllTodos(user.id);

      res.status(200).json(
        successResponse({
          message: 'Get todos success',
          data: todos,
        })
      );
    } catch (error) {
      next(error);
    }
  };

  static getTodoById = async (req, res, next) => {
    try {
      const { id: todoId } = req.params;
      const { id: userId } = req.user;

      const todo = await TodoService.getTodo(todoId, userId);

      res.status(200).json(
        successResponse({
          message: 'Get todo success',
          data: todo,
        })
      );
    } catch (error) {
      next(error);
    }
  };

  static createTodo = async (req, res, next) => {
    try {
      const { id: userId } = req.user;

      todoValidation.validateCreateTodo(req.body);

      const todo = await TodoService.createTodo(userId, req.body);

      res.status(201).json(
        successResponse({
          message: 'Create todo success',
          data: todo,
        })
      );
    } catch (error) {
      next(error);
    }
  };

  static updateTodo = async (req, res, next) => {
    try {
      const { id: todoId } = req.params;
      const { id: userId } = req.user;

      todoValidation.validateUpdateTodo(req.body);

      const todo = await TodoService.updateTodo(todoId, userId, req.body);

      res.status(200).json(
        successResponse({
          message: 'Update todo success',
          data: {
            id: todo.id,
            title: todo.title,
            createdAt: todo.createdAt,
            updatedAt: todo.updatedAt,
          },
        })
      );
    } catch (error) {
      next(error);
    }
  };

  static deleteTodo = async (req, res, next) => {
    try {
      const { id: todoId } = req.params;
      const { id: userId } = req.user;

      await TodoService.deleteTodo(todoId, userId);

      res.status(200).json(
        successResponse({
          message: 'Delete todo success',
        })
      );
    } catch (error) {
      next(error);
    }
  };
}

module.exports = TodoController;
