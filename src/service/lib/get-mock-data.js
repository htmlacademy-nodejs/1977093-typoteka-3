'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const path = require(`path`);

const MOCKS_CACHE = new Map();
const FILE_NAME = `mocks.json`;

const getMocksData = async () => {
  if (MOCKS_CACHE.has(FILE_NAME)) {
    return MOCKS_CACHE.get(FILE_NAME);
  }

  try {
    const filePath = path.resolve(`./`, FILE_NAME);
    const content = await fs.readFile(filePath, `utf8`);
    MOCKS_CACHE.set(FILE_NAME, content);

    return content;
  } catch (err) {
    console.error(chalk.red(err));
    return [];
  }
};

module.exports = getMocksData;
