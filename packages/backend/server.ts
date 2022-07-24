import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

import logger from './utils/logger';
import database from './helpers/database';
import config from './config';

const app = express();
(async () => {
  try {
    /**
     * Setup Database Connection
     */  
    await database.connect(config.database.url);

    /**
     * Setup Sever Listener Port
     */
    const PORT = parseInt(config.PORT, 10);
    
    app.listen(PORT, () => {
      logger.info(`Running Node.js version ${config.node_version}`);
      logger.info(`App environment: ${config.ENV}`);
      logger.info(`App is running on port ${PORT}`);
    });
  } catch (error:any) {
    throw new Error(error);    
  }
})();


export default app;