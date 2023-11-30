const prisma = require('../lib/prisma');
const bcrypt = require('bcrypt');
const AuthenticationError = require('../exeptions/AuthenticationError');
const { generateAccessToken } = require('../lib/token');
const ClientError = require('../exeptions/ClientError');
const { CONFLICT_ERR } = require('../constants/errorType');

class AuthService {
  static async login({ username, password }) {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      throw new AuthenticationError('User or password incorrect');
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      throw new AuthenticationError('User or password incorrect');
    }

    const accessTokenPayload = {
      id: user.id,
      username: user.username,
    };

    const accessToken = generateAccessToken(accessTokenPayload);

    return {
      accessToken,
      user: {
        id: user.id,
        username: user.username,
      },
    };
  }

  static async register(payload) {
    const user = await prisma.user.findUnique({
      where: {
        username: payload.username,
      },
    });

    if (user) {
      throw new ClientError('User already exists', {
        statusCode: 409,
        type: CONFLICT_ERR,
      });
    }

    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const newUser = await prisma.user.create({
      data: {
        username: payload.username,
        password: hashedPassword,
      },
    });

    return newUser;
  }
}

module.exports = AuthService;
