import { NextFunction, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

export default function primeRequestContext(req: Request, res: Response, next: NextFunction) {
  req.context = {
    traceId: uuid(),
  };
  next();
}
