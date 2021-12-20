'use strict';

const {Router} = require(`express`);

const myRoute = new Router();

myRoute.get(`/`, (req, res) => {
  res.send(req.originalUrl);
});

myRoute.get(`/comments`, (req, res) => {
  res.send(req.originalUrl);
});

module.exports = myRoute;
