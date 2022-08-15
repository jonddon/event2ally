import { NotFoundError, ServerOperationFailedError } from "../http/errors/app.errors";
import paginate from "../../utils/paginator";
import EventModel, { IEvent } from "../models/Event";
import { IFetchEventParams } from "../requests/event";

function sanitizeParams(params: any | IFetchEventParams) {
  for (const p of params) {
    if (!params[p]) delete params[p];
  }
  return params;
}

export async function create(req: IEvent) {
  const event = await EventModel.create(req);
  if (!event.id) {
    throw new ServerOperationFailedError(req);
  }
  return event;
}

export async function getAll(input: any | IFetchEventParams, path: string) {
  let params = sanitizeParams(input);
  let findQuery = EventModel.find({...params});
  const query = params.limit ? findQuery.limit(params.limit) : findQuery;
  const events = await query;
  if (events.length > 0) {
    const data = paginate(events, params.limit, params.page, path);
  }
  return events;
}

export async function get(filter: IEvent) {
  const event = await EventModel.findOne({...filter});
  if (!event?.id) {
    throw new NotFoundError(filter);
  }
  return event;
}

export default {
  create,
  getAll,
  get
}