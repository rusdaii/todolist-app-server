const router = require('express').Router();

const authRoute = require('./api/routes/auth.route');
const todoRoute = require('./api/routes/todo.route');
const taskRoute = require('./api/routes/task.route');

router.use('/api/auth', authRoute);
router.use('/api/todos', todoRoute);
// router.use('/api/todos/', taskRoute);

module.exports = router;
