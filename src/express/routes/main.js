'use strict';

const {Router} = require(`express`);

const mainRoute = new Router();

mainRoute.get(`/`, (req, res) => {
  res.render(`pages/main`);
});

mainRoute.get(`/register`, (req, res) => {
  res.render(`pages/sign-up`);
});

mainRoute.get(`/login`, (req, res) => {
  res.render(`pages/login`);
});

mainRoute.get(`/search`, (req, res) => {
  const {query} = req.query;
  const searchResult = [];

  res.render(`pages/search`, {query, searchResult});
});

module.exports = mainRoute;
