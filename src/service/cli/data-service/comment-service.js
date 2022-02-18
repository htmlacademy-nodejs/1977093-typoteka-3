'use strict';

const {nanoid} = require(`nanoid`);
const {MAX_ID_LENGTH} = require(`../../constants`);

class CommentService {
  constructor(articles) {
    this._articles = articles;
  }

  findAll(article) {
    return article.comments;
  }

  create(article, comment) {
    comment.id = nanoid(MAX_ID_LENGTH);
    article.comments.push(comment);

    return comment;
  }

  delete(article, commentId) {
    const {comments} = article;
    const comment = comments.find((item) => item.id === commentId);
    const index = comments.indexOf(comment);

    if (index === -1) {
      return null;
    }

    return comments.splice(index, 1)[0];
  }
}

module.exports = CommentService;
