import { Request, Response } from 'express';
import { FailedResponse, SuccessResponse, ServerErrorResponse } from '../../../utils/response';
import EventRepository from '../../repository/event.repository';
import logger from '../../../utils/logger';


export default class EventController {
  constructor() {};

  public async createEvent(req: Request, res: Response): Promise<void> {
    try {
      const event = await EventRepository.create(req.body);
      return SuccessResponse(event, 200, "event created", null);
    } catch (err) {
      logger.error(err);
      return ServerErrorResponse(res, 500, 'Server Error: contact admin', {});
    }
  }
};

export const EventControllerInstance = new EventController();