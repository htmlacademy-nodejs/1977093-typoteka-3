'use strict';

const express = require(`express`);
const chalk = require(`chalk`);
const router = require(`./api`);

const DEFAULT_PORT = 3000;
const API_PREFIX = `/api`;

const startServer = (port) => {
  const app = express();

  app.use(express.json());
  app.use(API_PREFIX, router);

  app.listen(port, () => {
    console.info(chalk.green(`Server started on port: ${port}`));
  });
};

module.exports = {
  name: `--server`,
  run(customPort) {
    const port = Number(customPort) || DEFAULT_PORT;
    startServer(port);
  }
};
