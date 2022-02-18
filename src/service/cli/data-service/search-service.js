'use strict';

class SearchService {
  constructor(articles) {
    this._articles = articles;
  }

  findAll(query) {
    const articles = this._articles.filter((item) => item.title.includes(query));

    if (articles.length === 0) {
      return null;
    }

    return articles;
  }
}

module.exports = SearchService;
