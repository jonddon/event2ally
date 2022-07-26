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

interface IEventLocation {
  address: string;
  city: string;
  country: string;
  latitude: string;
  longitude: string
}

const EventLocationType = {
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
}

interface IEvent {
  name: string;
  host: string;
  creator: string;
  contract_address: string;
  date: Date;
  type: string;
  category: string;
  location?: IEventLocation;
  ticket_price?: string;
}

const eventSchema = new Schema<IEvent>({
  name: { type: String, required: true },
  host: { type: String, required: true },
  creator: { type: String, required: true },
  contract_address: { type: String, unique: true, required: true },
  date: { type: Date, required: true },
  type: { type: String, enum: EventType, required: true },
  category: { type: String, enum: EventCategory, required: true },
  location: EventLocationType,
  ticket_price: { type: String, required: false },
});

const EventModel = model<IEvent>('Event', eventSchema);

export default EventModel;