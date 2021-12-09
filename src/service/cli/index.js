'use strict';

const generate = require(`./generate`);
const version = require(`./version`);
const help = require(`./help`);

module.exports.Cli = {
  [generate.name]: generate,
  [version.name]: version,
  [help.name]: help,
};
