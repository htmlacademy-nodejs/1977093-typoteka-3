'use strict';

const {Router} = require(`express`);
const category = require(`../api/category`);
const article = require(`../api/article`);
const search = require(`../api/search`);
const {CategoryService, ArticleService, CommentService, SearchService} = require(`../data-service`);
const getMocksData = require(`../../lib/get-mock-data`);

const router = new Router();

(async () => {
  const mocks = JSON.parse(await getMocksData());

  category(router, new CategoryService(mocks));
  article(router, new ArticleService(mocks), new CommentService(mocks));
  search(router, new SearchService(mocks));
})();

module.exports = router;
