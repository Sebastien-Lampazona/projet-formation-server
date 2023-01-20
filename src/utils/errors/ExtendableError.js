/**
 * @extends Error
 */
export default class ExtendableError extends Error {
  constructor(error, status, isPublic) {
    super(error);

    this.name = this.constructor.name;
    this.message = error;
    this.status = status;
    this.isPublic = isPublic;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor.name);
  }
}
