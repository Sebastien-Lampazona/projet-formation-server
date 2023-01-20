import ExtendableError from 'src/utils/errors/ExtendableError';
import status from 'http-status';

class BadRequestError extends ExtendableError {
  constructor(message) {
    super(message, status.BAD_REQUEST, true);
    this.name = 'BadRequest';
  }
}
export default BadRequestError;
