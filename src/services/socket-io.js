import { Server } from 'socket.io';

// eslint-disable-next-line import/no-mutable-exports
let io;

export const initSocketIO = (httpServer) => {
  io = new Server(httpServer, {
    cors: {
      origin: true,
      methods: ['GET', 'POST'],
    },
  });
  return io;
};

export default () => io;
