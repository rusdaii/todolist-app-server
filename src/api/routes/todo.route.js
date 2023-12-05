const TodoController = require('../controllers/todo.controller');
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

module.exports = router;
