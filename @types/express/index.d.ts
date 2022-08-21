import { RequestContext } from "../../src/app/express/types";

declare global {
  declare namespace Express {

    interface Request {
      context?: RequestContext;
    };
  };
}