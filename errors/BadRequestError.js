const { badRequestError } = require('../utils/errors');

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = badRequestError;
  }
}

module.exports = BadRequestError;
