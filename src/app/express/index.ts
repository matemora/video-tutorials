import express from 'express';
import { join } from 'path';
import { ENV } from '../../env';

import mountMiddleware from './mount-middleware';
// import mountRoutes from './mount-routes';

type CreateExpressAppParams = {
  config: {
    env: ENV;
  };
  env: ENV;
};

export default function createExpressApp({ config, env }: CreateExpressAppParams) {
  const app = express();

  app.set('views', join(__dirname, '..'))
  app.set('view engine', 'pug');

  mountMiddleware(app, env);
  // mountRoutes(app, config);

  return app
}