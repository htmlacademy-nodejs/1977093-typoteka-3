'use strict';

const {Router} = require(`express`);

const {HttpCode} = require(`../../constants`);

const route = new Router();

module.exports = (router, service) => {
  router.use(`/categories`, route);

  route.get(`/`, (req, res) => {
    const categories = service.findAll();

    res.status(HttpCode.OK).json(categories);
  });
};
