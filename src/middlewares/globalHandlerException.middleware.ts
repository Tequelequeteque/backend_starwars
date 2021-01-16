import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../shared/apiError';

export default function globalHandlerException(
  error: Error,
  _request: Request,
  responde: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
): Response {
  if (error instanceof ApiError) {
    return responde.status(error.statusCode).json(error);
  }
  // eslint-disable-next-line no-console
  // console.error(error);

  if (process.env.NODE_ENV !== 'prod') {
    return responde.status(500).json(error);
  }
  const newError = new ApiError('Internal Server error', 500);
  return responde.status(newError.statusCode).json(newError);
}
