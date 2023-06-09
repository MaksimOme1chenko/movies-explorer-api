const token = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;

const AuthorizationError = require('../errors/UnauthorizedError');

// eslint-disable-next-line consistent-return
const auth = (req, res, next) => {
  const { jwt } = req.cookies;

  if (!jwt) {
    return next(new AuthorizationError('Необходима авторизация'));
  }

  let payload;

  try {
    payload = token.verify(jwt, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    return next(new AuthorizationError('Необходима авторизация'));
  }

  req.user = payload;

  next();
};
module.exports = { auth };
