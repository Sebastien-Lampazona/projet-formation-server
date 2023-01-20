import ExtendableError from 'src/utils/errors/ExtendableError';
import status from 'http-status';

export default class TimeoutError extends ExtendableError {
  msTimeout = null;

  constructor(
    _message = null,
    msTimeout = null,
  ) {
    let message = _message;
    if (!message) {
      message = "Le temps d'attente est dépassé";
      if (msTimeout) {
        message = `Le temps d'attente de ${msTimeout}ms est dépassé`;
      }
    }
    super(message, status.SERVICE_UNAVAILABLE, true);
    this.name = 'Timeout';
    this.msTimeout = msTimeout;
  }
}
