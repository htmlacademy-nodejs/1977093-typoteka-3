'use strict';

const {Router} = require(`express`);
const {HttpCode} = require(`../../constants`);

const route = new Router();

module.exports = (router, service) => {
  router.use(`/search`, route);

  route.get(`/`, (req, res) => {
    const {query} = req.query;
    const articles = service.findAll(query);

    if (!articles) {
      return res.status(HttpCode.NOT_FOUND).send();
    }

    return res.status(HttpCode.OK).json(articles);
  });
};
