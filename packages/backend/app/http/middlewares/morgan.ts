import express from "express";
import morgan, { StreamOptions } from "morgan";
import moment from "moment";
import { logger } from "../../../utils/logger";

// Override the stream method by telling
// Morgan to use our custom logger instead of the console.log.
const stream: StreamOptions = {
  // Use the http severity
  write: (message: any) => logger.http(message),
};

morgan.token(
  "ip",
  (request: express.Request, response: express.Response) => request.ip
);
morgan.token("timestamp", () => moment().format());
// Build the morgan middleware
const morganMiddleware = morgan(
  ":method :url :status -- :response-time ms -- :ip",
  { stream }
);

export default morganMiddleware;