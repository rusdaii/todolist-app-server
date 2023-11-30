const router = require('express').Router();

const authRoute = require('./api/routes/auth.route');
const todoRoute = require('./api/routes/todo.route');

router.use('/api/auth', authRoute);
router.use('/api/todos', todoRoute);

module.exports = router;
