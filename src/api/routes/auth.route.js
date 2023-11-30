const AuthController = require('../controllers/auth.controller');

const router = require('express').Router();

router.post('/register', AuthController.registerUser);
router.post('/login', AuthController.loginUser);

module.exports = router;
