const { notFoundError } = require('../utils/errors');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = notFoundError;
  }
}

module.exports = NotFoundError;
