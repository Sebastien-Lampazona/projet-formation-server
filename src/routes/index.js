/*
 * Package Import
 */
import path from 'path';
import { Router } from 'express';
/*
 * Local Import
 */
// Import des routes
import apiRoutes from 'src/routes/api';

export default () => {
  const router = new Router();

  router.use('/api', apiRoutes);

  return router;
};
