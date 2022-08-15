import { Joi, Segments } from 'celebrate';
import { EventCategory, EventType } from '../models/Event';

const eventLocationSchema = Joi.object().keys({
  address: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
  latitude: Joi.string().required(),
  longitude: Joi.string().required()
});

export const createEventSchema = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    creator: Joi.string().required(),
    host: Joi.string().required(),
    category: Joi.string()
    .valid(
      EventCategory.Meetup,
      EventCategory.Hangout,
      EventCategory.Webinar,
      EventCategory.Conference,
    ).required(),
    type: Joi.string()
    .valid(
      EventType.Online,
      EventType.Offline,
      EventType.Hybrid,
    ).required(),
    contract_address: Joi.string().required(),
    date: Joi.date().required(),
    location: Joi.when('type', {
      is: EventType.Offline || EventType.Hybrid,
      then: eventLocationSchema.required()
    }),
    ticket_price: Joi.string().optional(),
  })
};

export const getEventSchema = {
  [Segments.QUERY]: Joi.object().keys({
    limit: Joi.number().integer().optional(),
    page: Joi.number().integer().optional(),
    category: Joi.string()
    .valid(
      EventCategory.Meetup,
      EventCategory.Hangout,
      EventCategory.Webinar,
      EventCategory.Conference,
    ).optional(),
    type: Joi.string()
    .valid(
      EventType.Online,
      EventType.Offline,
      EventType.Hybrid,
    ).optional(),
    date: Joi.date().optional(),
    city: Joi.string().optional(),
    country: Joi.string().optional(),
  })
}

export interface IFetchEventParams {
  limit?: number;
  page?: number;
  category?: string;
  type?: string;
  city?: string;
  country?: string;
  date?: Date;
}