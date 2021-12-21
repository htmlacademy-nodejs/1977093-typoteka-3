'use strict';

const {Router} = require(`express`);

const mainRoute = new Router();

mainRoute.get(`/`, (req, res) => {
  res.send(req.originalUrl);
});

mainRoute.get(`/register`, (req, res) => {
  res.send(req.originalUrl);
});

mainRoute.get(`/login`, (req, res) => {
  res.send(req.originalUrl);
});

mainRoute.get(`/search`, (req, res) => {
  res.send(req.originalUrl);
});

mainRoute.get(`/categories`, (req, res) => {
  res.send(req.originalUrl);
});

module.exports = mainRoute;
