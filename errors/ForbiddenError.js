const { forbiddenError } = require('../utils/errors');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = forbiddenError;
  }
}

module.exports = ForbiddenError;
