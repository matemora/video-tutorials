import express, { NextFunction, Request, Response } from 'express';

function createHandlers({ queries }) {
  async function home(req: Request, res: Response, next: NextFunction) {
    const viewData = await queries.loadHomePage();
    res.render('home/templates/home', viewData);
  }
  return {
    home,
  }
}

function createQueries({ db }) {
  function loadHomePage() {
    return db('videos')
      .sum('view_count as videosWatched')
      .then(rows => rows[0]);
  }
  return {
    loadHomePage
  }
}

export default function createHome({ db }) {
  const queries = createQueries({ db });
  const handlers = createHandlers({ queries });
  const router = express.Router();
  router.route('/').get(handlers.home);
  return {
    handlers,
    queries,
    router,
  }
}