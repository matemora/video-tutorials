import express from 'express';
import { join } from 'path';

import mountMiddleware from './mount-middleware';
import mountRoutes from './mount-routes';

export function createExpressApp({ config, env }) {
  const app = express();

  app.set('views', join(__dirname, '..'))
  app.set('view engine', 'pug');

  mountMiddleware(app, env);
  mountRoutes(app, config);
  
  return app
}