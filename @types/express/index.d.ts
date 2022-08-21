import { RequestContext } from "../../src/app/express/types";

declare module 'express-serve-static-core' {
  interface Request {
    context?: RequestContext;
  }
}