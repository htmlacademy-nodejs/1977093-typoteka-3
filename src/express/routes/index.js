'use strict';

const {Router} = require(`express`);
const mainRoute = require(`./main`);
const myRoute = require(`./my`);
const articlesRoute = require(`./articles`);
const categoriesRoute = require(`./categories`);

const router = new Router();

router.use(`/`, mainRoute);
router.use(`/my`, myRoute);
router.use(`/articles`, articlesRoute);
router.use(`/categories`, categoriesRoute);

module.exports = router;
