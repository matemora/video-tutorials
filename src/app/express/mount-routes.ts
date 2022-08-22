import { Express, Router } from 'express';

type ConfigParam = {
  homeApp: {
    router: Router;
  };
};

export default function mountRoutes(app: Express, config: ConfigParam) {
  app.use('/', config.homeApp.router);
}