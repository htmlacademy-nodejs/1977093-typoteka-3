'use strict';

const {Router} = require(`express`);

const articlesRoute = new Router();

articlesRoute.get(`/category/:id`, (req, res) => {
  res.render(`pages/articles-by-category`);
});

articlesRoute.get(`/edit/:id`, (req, res) => {
  const {id} = req.params;

  res.render(`pages/post`, {id});
});

articlesRoute.get(`/add`, (req, res) => {
  res.render(`pages/post`);
});

articlesRoute.get(`/:id`, (req, res) => {
  res.render(`pages/post-detail`);
});

module.exports = articlesRoute;
