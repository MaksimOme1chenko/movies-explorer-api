const { conflictRequestError } = require('../utils/errors');

class ConflictRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = conflictRequestError;
  }
}

module.exports = ConflictRequestError;
