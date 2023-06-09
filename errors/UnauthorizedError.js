const { unauthorizedError } = require('../utils/errors');

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = unauthorizedError;
  }
}

module.exports = UnauthorizedError;
