import db from './models/index.mjs';

import initGamesController from './controllers/games.mjs';

export default function bindRoutes(app) {
  const gamesController = initGamesController(db);

  // define your route matchers here using app
  app.get('/', (req, res) => { res.render('home'); }); // if logged in, render homepage

  app.post('/games', gamesController.create);
  app.get('/games/:id', gamesController.get);
  app.put('/games/:id/deal', gamesController.deal);
}
