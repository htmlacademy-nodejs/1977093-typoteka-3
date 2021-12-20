'use strict';

const {Router} = require(`express`);

const registerRoute = new Router();

registerRoute.get(`/`, (req, res) => {
  res.send(req.originalUrl);
});

module.exports = registerRoute;
