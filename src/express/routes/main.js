'use strict';

const {Router} = require(`express`);

const mainRoute = new Router();

mainRoute.get(`/`, (req, res) => {
  res.send(req.originalUrl);
});

module.exports = mainRoute;
