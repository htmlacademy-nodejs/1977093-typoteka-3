'use strict';

const {Router} = require(`express`);

const categoriesRoute = new Router();

categoriesRoute.get(`/`, (req, res) => {
  res.render(`pages/all-categories`);
});

module.exports = categoriesRoute;
