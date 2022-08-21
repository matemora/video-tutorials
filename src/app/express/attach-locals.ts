import { NextFunction, Request, Response } from "express";

export default function attachLocals(req: Request, res: Response<any, { context?: Request['context'] }>, next: NextFunction) {
  res.locals.context = req.context;
  next();
}