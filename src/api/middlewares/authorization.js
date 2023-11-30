const AuthorizationError = require('../../exeptions/AuthorizationError');

exports.authorization = () => async (req, res, next) => {
  try {
    const { id } = req.user;

    if (!id) {
      throw new AuthorizationError();
    }

    next();
  } catch (error) {
    next(error);
  }
};
