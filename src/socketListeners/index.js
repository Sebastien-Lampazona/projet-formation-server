import logger from 'src/utils/logger';

export default (io) => {
  io.on('connection', (socket) => {
    logger.info(`Nouvelle connexion socket : ${socket.id}`);

    socket.on('message', (message) => {
      logger.info(`Nouveau message recu`);
      io.emit('message', message);
    });
  });
};
