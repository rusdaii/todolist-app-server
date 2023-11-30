const { successResponse } = require('../../lib/response');
const AuthService = require('../../services/auth');
const authValidation = require('../../validations/auth');

class AuthController {
  static registerUser = async (req, res, next) => {
    try {
      authValidation.validateRegister(req.body);

      const user = await AuthService.register(req.body);

      res.status(201).json(
        successResponse({
          message: 'Register success',
          data: {
            id: user.id,
            username: user.username,
          },
        })
      );
    } catch (error) {
      next(error);
    }
  };

  static loginUser = async (req, res, next) => {
    try {
      authValidation.validateLogin(req.body);

      const { user, accessToken } = await AuthService.login(req.body);

      res.status(200).json(
        successResponse({
          message: 'Login success',
          data: {
            id: user.id,
            username: user.username,
            accessToken,
          },
        })
      );
    } catch (error) {
      next(error);
    }
  };
}

module.exports = AuthController;
