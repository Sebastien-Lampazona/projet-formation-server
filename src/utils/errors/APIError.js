import ExtendableError from 'src/utils/errors/ExtendableError';

/**
 * Class representing an API error.
 * @extends ExtendableError
 */
export default class APIError extends ExtendableError {
  /**
   * Create an API error.
   * @param {String} error - Error error.
   * @param {Number} status - HTTP-Status code of error.
   * @param {Boolean} isPublic - If error should be visible to user or not.
   */
  constructor(error, status, isPublic = true) {
    super(error, status, isPublic);
  }
}
