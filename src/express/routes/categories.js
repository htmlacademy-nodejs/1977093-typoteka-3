'use strict';

const {Router} = require(`express`);

const categoriesRoute = new Router();

categoriesRoute.get(`/`, (req, res) => {
  res.send(req.originalUrl);
});

module.exports = categoriesRoute;
