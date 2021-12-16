'use strict';

const generate = require(`./generate`);
const server = require(`./server`);
const version = require(`./version`);
const help = require(`./help`);

module.exports.Cli = {
  [generate.name]: generate,
  [server.name]: server,
  [version.name]: version,
  [help.name]: help,
};
