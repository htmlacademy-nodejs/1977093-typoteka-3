'use strict';

const {Router} = require(`express`);

const articlesRoute = new Router();

articlesRoute.get(`/`, (req, res) => {
  res.send(req.originalUrl);
});

articlesRoute.get(`/category/:id`, (req, res) => {
  res.send(req.originalUrl);
});

articlesRoute.get(`/edit/:id`, (req, res) => {
  res.send(req.originalUrl);
});

articlesRoute.get(`/add`, (req, res) => {
  res.send(req.originalUrl);
});

articlesRoute.get(`/:id`, (req, res) => {
  res.send(req.originalUrl);
});

module.exports = articlesRoute;
