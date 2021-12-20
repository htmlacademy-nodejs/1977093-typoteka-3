'use strict';

const {Router} = require(`express`);

const loginRoute = new Router();

loginRoute.get(`/`, (req, res) => {
  res.send(req.originalUrl);
});

module.exports = loginRoute;
