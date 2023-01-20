import ExtendableError from 'src/utils/errors/ExtendableError';
import status from 'http-status';

export default class ForbiddenError extends ExtendableError {
  constructor(
    message = "Tu n'a pas les droits requis pour accéder à cette ressource",
  ) {
    super(message, status.FORBIDDEN, true);
    this.name = 'Forbidden';
  }
}
