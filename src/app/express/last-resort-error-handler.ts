import { NextFunction, Request, Response } from "express";

export default function lastResortErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  const traceId = req.context ? req.context.traceId : 'none';
  console.error(traceId, err);
  res.status(500).send('error');
}