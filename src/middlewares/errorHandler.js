import logger from 'src/utils/logger';

/*
 * Package Import
 */
import status from 'http-status';

/*
 * Local Import
 */
import APIError from 'src/utils/errors/APIError';

/*
 * 400 - Bad Request
 */
export const badRequest = (err) => new APIError(err, status.BAD_REQUEST);

/*
 * 404 - Not Found
 */
export const notFound = (req, res, next) => {
  const err = new APIError('Not Found', status.NOT_FOUND);
  next(err);
};


export default function errorMiddleware(err, _, res, next) {
  logger.error(err);
  if (res.headersSent) {
    return next(err);
  }

  return res.status(500).send(err.isPublic ? err.message : 'Une erreur est survenue durant la communication avec le serveur');
}
