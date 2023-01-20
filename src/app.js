import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import http from 'http';

import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';

import { initSocketIO } from 'src/services/socket-io';

import mainRouter from 'src/routes';
import 'src/utils/dayjs';

import { errorMiddleware } from 'src/middlewares';
import socketListeners from 'src/socketListeners';

// Express app
const app = express();
const server = http.createServer(app);
const io = initSocketIO(server);

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  // environment: process.env.NODE_ENV,
});

// Morgan logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // `dev` is equal to `:method :url :status :response-time ms`
}

// Security
// See : http://expressjs.com/en/advanced/best-practice-security.html
// Helmet is actually just a collection of nine smaller middleware
// functions that set security-related HTTP headers:
app.use(helmet());

app.use(express.static(path.join(__dirname, 'public')));

// Cors
app.use(cors({ origin: true })); // FIXME: accepte toutes les origines pour le moment

// Security
app.disable('x-powered-by'); // Disable the X-Powered-By header. Attackers can use this header to detect apps running Express. And then launch specifically-targeted attacks

// Body parsers for custom routes
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

// Le routeur initial
app.use(mainRouter(app));

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Error middleware
app.use(errorMiddleware);

socketListeners(io);

export default server;
