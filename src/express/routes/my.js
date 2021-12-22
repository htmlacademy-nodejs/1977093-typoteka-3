'use strict';

const {Router} = require(`express`);

const myRoute = new Router();

myRoute.get(`/`, (req, res) => {
  res.render(`pages/my`);
});

myRoute.get(`/comments`, (req, res) => {
  res.render(`pages/comments`);
});

module.exports = myRoute;
