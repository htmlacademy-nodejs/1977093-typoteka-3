'use strict';

const {HttpCode} = require(`../constants`);

module.exports = (req, res, next) => {
  const comment = req.body;
  const keys = Object.keys(comment);

  if (!keys.includes(`text`)) {
    return res.status(HttpCode.BAD_REQUEST).send(`Bad request. Required field 'text' is missed.`);
  } else if (comment.text.length === 0) {
    return res.status(HttpCode.BAD_REQUEST).send(`Bad request. Comment can't be empty.`);
  }

  return next();
};
