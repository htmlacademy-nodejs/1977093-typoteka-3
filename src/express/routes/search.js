'use strict';

const {Router} = require(`express`);

const searchRoute = new Router();

searchRoute.get(`/`, (req, res) => {
  res.send(req.originalUrl);
});

module.exports = searchRoute;
