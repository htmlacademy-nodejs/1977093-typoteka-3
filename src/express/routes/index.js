'use strict';

const {Router} = require(`express`);
const mainRoute = require(`./main`);
const registerRoute = require(`./register`);
const loginRoute = require(`./login`);
const myRoute = require(`./my`);
const articlesRoute = require(`./articles`);
const searchRoute = require(`./search`);
const categoriesRoute = require(`./categories`);

const router = new Router();

router.use(`/`, mainRoute);
router.use(`/register`, registerRoute);
router.use(`/login`, loginRoute);
router.use(`/my`, myRoute);
router.use(`/articles`, articlesRoute);
router.use(`/search`, searchRoute);
router.use(`/categories`, categoriesRoute);

module.exports = router;
