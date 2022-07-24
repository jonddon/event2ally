import { Schema, model } from 'mongoose';

enum EventType {
  Online,
  Offline,
  Hybrid
}

enum EventCategory {
  Meetup,
  Hangout,
  Webinar
}

interface IEvent {
  host: string;
  name: string;
  category: string;
  type: string;
  address?: string;
  ticket?: string;
}

const eventSchema = new Schema<IEvent>({
  name: { type: String, required: true },
  host: { type: String, required: true },
  type: { type: String, enum: EventType, required: true },
  category: { type: String, enum: EventCategory, required: true },
  address: { type: String, required: false },
  ticket: { type: String, required: false },
});

const EventModel = model<IEvent>('Event', eventSchema);

export default EventModel;