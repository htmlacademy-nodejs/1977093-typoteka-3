'use strict';

const express = require(`express`);
const chalk = require(`chalk`);

const {getLogger} = require(`../lib/logger`);
const router = require(`./api`);
const {HttpCode} = require(`../constants`);

const logger = getLogger({name: `api`});
const DEFAULT_PORT = 3000;
const API_PREFIX = `/api`;

const startServer = (port) => {
  const app = express();

  app.use(express.json());
  app.use((req, res, next) => {
    logger.debug(`Request on route ${req.url}`);
    res.on(`finish`, () => {
      logger.info(`Response status code ${res.statusCode}`);
    });
    next();
  });
  app.use(API_PREFIX, router);
  app.use((req, res) => {
    res.status(HttpCode.NOT_FOUND)
      .send(`Not found`);
    logger.error(`Route not found: ${req.url}`);
  });
  app.use((err, _req, _res, _next) => {
    logger.error(`An error occurred on processing request: ${err.message}`);
  });

  try {
    app.listen(port, (err) => {
      if (err) {
        return logger.error(`An error occurred on server creation: ${err.message}`);
      }

      return logger.info(chalk.green(`Server started on port: ${port}`));
    });
  } catch (err) {
    logger.error(`An error occurred: ${err.message}`);
    process.exit(1);
  }
};

module.exports = {
  name: `--server`,
  run(customPort) {
    const port = Number(customPort) || DEFAULT_PORT;
    startServer(port);
  }
};
