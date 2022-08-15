export class ApplicationError extends Error {
  public code = 400;

  constructor (code: number, message: string, ...args: any) {
    super(...args);
    this.message = message;
    this.code = code;
  }
}

export class BadRequestError extends ApplicationError {
  constructor (...args: any) {
    super(400, "bad request", ...args);
  }
}

export class NotFoundError extends ApplicationError {
  constructor (...args: any) {
    super(404, "resource not found", ...args);
  }
}

export class ServerOperationFailedError extends ApplicationError {
  constructor (...args: any) {
    super(500, "Server: operation failed", ...args);
  }
}