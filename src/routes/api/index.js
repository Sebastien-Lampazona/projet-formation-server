/*
 * Package Import
 */
import { Router } from 'express';

/*
 * Local Import
 */
import { errorHandler } from 'src/middlewares';

/*
 * Init
 */
const router = new Router();

router.use(errorHandler.notFound);

export default router;
