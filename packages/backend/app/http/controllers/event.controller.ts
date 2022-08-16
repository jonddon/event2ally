import { NextFunction, Request, Response } from 'express';
import { SuccessResponse, ServerErrorResponse } from '../../../utils/response';
import EventRepository from '../../repository/event.repository';
import { logger } from '../../../utils/logger';


export default class EventController {
  constructor() {};

  public async createEvent(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const event = await EventRepository.create(req.body);
      logger.info(event);
      return SuccessResponse(res, 200, "event created", event);
    } catch (err) {
      logger.error(err);
      next(err);
      // return ServerErrorResponse(res, 500, 'Server Error: contact admin', {});
    }
  }
};

export const EventControllerInstance = new EventController();