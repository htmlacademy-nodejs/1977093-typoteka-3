'use strict';

const {nanoid} = require(`nanoid`);
const {MAX_ID_LENGTH} = require(`../../constants`);
const {formatDate} = require(`../../utils`);

class ArticleService {
  constructor(articles) {
    this._articles = articles;
  }

  create(article) {
    article.id = nanoid(MAX_ID_LENGTH);
    article.comments = [];
    article.createdDate = formatDate(new Date());

    this._articles.push(article);

    return article;
  }

  findAll() {
    return this._articles;
  }

  findOne(id) {
    return this._articles.find((article) => article.id === id);
  }

  update(id, article) {
    const articleToUpdate = this._articles.find((item) => item.id === id);

    return Object.assign(articleToUpdate, article);
  }

  delete(id) {
    const article = this._articles.find((item) => item.id === id);
    const index = this._articles.indexOf(article);

    if (index === -1) {
      return null;
    }

    return this._articles.splice(index, 1)[0];
  }
}

module.exports = ArticleService;
