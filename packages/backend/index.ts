import express, { Request, Response, NextFunction } from 'express';
import app from './server';
import { logger } from './utils/logger';
import config from './config';
import errorHandler from './app/http/errors/error.handler';
import morganMiddleware from './app/http/middlewares/morgan';
import { eventRoutes } from './routes';


/**
 * Bootstrap app
 */

async function bootstrap() {
  // Attach HTTP request info logger middleware in test mode
  // if (config.env !== 'production') {
    app.use((req: Request, _res: Response, next: NextFunction) => {
      logger.debug(`[${req.method}] ${req.hostname}${req.url}`);
      next();
    });
  // }

  app.disable('x-powered-by'); // Hide information

  // Enable middleware/whatever only in Production
  if (config.ENV === 'production') {
    // For example: Enable sentry in production
    // app.use(Sentry.Handlers.requestHandler());
  }

  /**
   * Configure cors
   */
  // app.use(cors());

  /**
   * Configure body parser
   */
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  /**
   * Configure logging middleware
   */
  app.use(morganMiddleware);

  /**
   * Host static public directory
   */
  // app.use('/', express.static('public'));

  /**
   * Configure routes
   */
  // add API routes
  app.use('/api/v1', eventRoutes);
  // return Status for initial route
  app.get("/", (_: Request, res: Response) => {
    res.status(200).json({ status: 'Online', message: `Online on ${new Date()}` });
  });

  /**
   * Configure error handler
   */
  errorHandler(app);
}

bootstrap()
  .then(() => {
    logger.info('⚡️[server]: Server is running...');
  })
  .catch((error) => {
    logger.error('An unknown error occurred ---- ' + error.message);
    process.exit();
  });