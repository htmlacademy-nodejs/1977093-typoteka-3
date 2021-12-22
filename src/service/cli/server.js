'use strict';

const express = require(`express`);
const {Router} = require(`express`);
const path = require(`path`);
const chalk = require(`chalk`);
const fs = require(`fs`).promises;

const DEFAULT_PORT = 3000;
const FILE_NAME = `mocks.json`;
const MOCKS_CACHE = new Map();

const HttpCode = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

const startServer = (port) => {
  const app = express();
  const routes = getRoutes();


  app.use(express.json());
  app.use(routes);

  app.listen(port, () => {
    console.info(chalk.green(`Server started on port: ${port}`));
  })
};

const getRoutes = () => {
  const router = new Router();

  router.get(`/posts`, async (req, res) => {
    try {
      const mocks = await readFile(FILE_NAME);
      res.send(mocks);
    } catch (err) {
      res.send([]);
    }
  });

  return router;
}

const readFile = async (fileName) => {
  if (MOCKS_CACHE.has(fileName)) {
    return MOCKS_CACHE.get(fileName);
  }

  try {
    const filePath = path.resolve(`./`, fileName);
    const content = await fs.readFile(filePath, `utf8`);
    MOCKS_CACHE.set(fileName, content);

    return content;
  } catch (err) {
    console.error(chalk.red(err));
    return [];
  }
};

module.exports = {
  name: `--server`,
  run(customPort) {
    const port = Number(customPort) || DEFAULT_PORT;
    startServer(port);
  }
};
