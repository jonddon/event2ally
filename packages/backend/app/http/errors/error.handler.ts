import { Application, Request, Response, NextFunction } from 'express';
import { errors, isCelebrateError } from "celebrate";
import { MongoError } from 'mongodb';
import { NotFoundError } from './app.errors';
import { logger as log } from '../../../utils/logger';
import { FailedResponse, ServerErrorResponse } from '../../../utils/response';

export default function (app: Application) {

  /**
   * Handle errors
   */

  // If you are lost
  app.use(() => {
    throw new NotFoundError('Route Not Found!!!');
  });

  // Request error handler
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const userString = 'unknown user';
    if (err instanceof SyntaxError) {
      return FailedResponse(res, 400, 'Bad Request', null);
    }
    else if (isCelebrateError(err)) {
      const messages = err.details;
      let jsonObject: any = {};  
      messages.forEach((value: any, key: any) => { jsonObject[key] = value });  
      let msg = jsonObject.body.details.map((er: any)=>{ return {[er.path]: er.message.replace(/["]+/g, '')}});
      const message = jsonObject.body.details ? jsonObject.body.details[0].message.replace(/["]+/g, '') : err.message;
      // console.log('json==>', msg, messages, message);
      return FailedResponse(res, 400, message, msg);
    }
    else if (err instanceof MongoError) {
      if (err.code === 11000) {
        log.error(`${req.method} ${req.path}: MongoDB duplicate entry from ${userString}`);
      } else {
        log.error(`${req.method} ${req.path}: Unhandled MongoDB error ${userString}. ${err.errmsg}`);
      }
      if (!res.headersSent) {
        return res.sendStatus(500);
      }
    }
    if (err instanceof Error) {
      log.error(`${req.method} ${req.path}: Unhandled request error ${userString}. ${err.message}`);
    }
    if (typeof err === 'string') {
      log.error(`${req.method} ${req.path}: Unhandled request error ${userString}. ${err}`);
    }
    app.use(errors());
    return next(err);
  });

  // Optional fallthrough error handler
  app.use(function onError(err: Error, _req: Request, res: Response, _next: NextFunction) {
    return ServerErrorResponse(res, 500, 'Internal Server Error', err);
  });
}


