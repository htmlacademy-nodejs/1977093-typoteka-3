'use strict';

const {Router} = require(`express`);
const {HttpCode} = require(`../../constants`);
const articleValidator = require(`../../middlewares/article-validator`);
const commentValidator = require(`../../middlewares/comment-validator`);
const articleExist = require(`../../middlewares/article-exist`);
const commentExist = require(`../../middlewares/comment-exist`);

const route = new Router();

module.exports = (router, articleService, commentsService) => {
  router.use(`/articles`, route);

  route.get(`/`, (req, res) => {
    const articles = articleService.findAll();

    res.status(HttpCode.OK).json(articles);
  });

  route.get(`/:articleId`, articleExist(articleService), (req, res) => {
    const article = res.locals.article;

    res.status(HttpCode.OK).json(article);
  });

  route.post(`/`, articleValidator, (req, res) => {
    const article = req.body;
    const createdArticle = articleService.create(article);

    res.status(HttpCode.CREATED).json(createdArticle);
  });

  route.put(`/:articleId`, [articleExist(articleService), articleValidator], (req, res) => {
    const {articleId} = req.params;
    const article = req.body;
    const updatedArticle = articleService.update(articleId, article);

    res.status(HttpCode.OK).json(updatedArticle);
  });

  route.delete(`/:articleId`, articleExist(articleService), (req, res) => {
    const {articleId} = req.params;
    articleService.delete(articleId);

    res.status(HttpCode.NO_CONTENT).send();
  });

  route.get(`/:articleId/comments`, articleExist(articleService), (req, res) => {
    const article = res.locals.article;

    const comments = commentsService.findAll(article);

    res.status(HttpCode.OK).json(comments);
  });

  route.post(`/:articleId/comments/`, [commentValidator, articleExist(articleService)], (req, res) => {
    const article = res.locals.article;
    const comment = req.body;

    const createdComment = commentsService.create(article, comment);

    res.status(HttpCode.CREATED).json(createdComment);
  });

  route.delete(`/:articleId/comments/:commentId`, [articleExist(articleService), commentExist(commentsService)], (req, res) => {
    const article = res.locals.article;
    const {commentId} = req.params;

    commentsService.delete(article, commentId);

    res.status(HttpCode.NO_CONTENT).send();
  });
};
