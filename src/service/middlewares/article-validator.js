'use strict';

const {HttpCode} = require(`../constants`);

module.exports = (req, res, next) => {
  const articleRequiredKeys = [`title`, `announce`, `fullText`, `category`];
  const article = req.body;
  const keys = Object.keys(article);

  keys.forEach((key) => {
    const index = articleRequiredKeys.indexOf(key);

    if (index !== -1) {
      articleRequiredKeys.splice(index, 1);
    }
  });

  if (articleRequiredKeys.length !== 0) {
    return res.status(HttpCode.BAD_REQUEST).send(`Bad request. Missed required fields: ${articleRequiredKeys.join(`,`)}`);
  }

  return next();
};
