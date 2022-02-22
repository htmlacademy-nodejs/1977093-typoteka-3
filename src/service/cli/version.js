'use strict';

const chalk = require(`chalk`);

const {getLogger} = require(`../lib/logger`);
const packageJsonFile = require(`../../../package.json`);

const logger = getLogger({name: `api`});

module.exports = {
  name: `--version`,
  run() {
    logger.info(chalk.blue(packageJsonFile.version));
  }
};
