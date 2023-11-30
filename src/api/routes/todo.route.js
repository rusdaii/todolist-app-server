const TodoController = require('../controllers/todo.controller');
const TaskController = require('../controllers/task.controller');
const authentication = require('../middlewares/authentication');
const { authorization } = require('../middlewares/authorization');

const router = require('express').Router();

router.post('/', authentication, TodoController.createTodo);
router.get('/', authentication, authorization(), TodoController.getTodos);
router.get('/:id', authentication, authorization(), TodoController.getTodoById);
router.put('/:id', authentication, TodoController.updateTodo);
router.delete(
  '/:id',
  authentication,

  TodoController.deleteTodo
);

router.post('/:id/tasks', authentication, TaskController.createTask);
router.put('/:todoId/tasks/:taskId', authentication, TaskController.updateTask);
router.delete(
  '/:todoId/tasks/:taskId',
  authentication,
  TaskController.deleteTask
);

module.exports = router;
