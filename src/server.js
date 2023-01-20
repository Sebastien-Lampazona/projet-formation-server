import 'dotenv-flow/config';
import logger from './utils/logger';
import app from './app';


async function startServer() {
  const port = getPort();
  app.listen(port, () => {
    logger.info('🎉  Node.js server is running :');
    logger.info(`    → PORT: ${port}`);
    logger.info(`    → URL: http://localhost:${port}`);
    logger.info(`    → ENV: ${process.env.NODE_ENV}`);
  });
  return app;
}

function getPort() {
  const port = process.env.SERVER_PORT;
  if (!port) {
    logger.error("ヽ༼ ಠ益ಠ ༽ﾉ  Il y a un problème avec la variable d'env SERVER_PORT");
    process.exit(0);
  }
  return port;
}

export default startServer();
