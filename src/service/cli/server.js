'use strict';

const http = require(`http`);
const path = require(`path`);
const chalk = require(`chalk`);
const fs = require(`fs`).promises;

const DEFAULT_PORT = 3000;
const FILE_NAME = `mocks.json`;

const HttpCode = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

const handleRequests = async (req, res) => {
  const notFoundMessageText = `Not found`;

  switch (req.url) {
    case `/`:
      try {
        const filePath = path.resolve(`./`, FILE_NAME);
        const content = await fs.readFile(filePath, `utf8`);
        const mocks = JSON.parse(content);
        const message = mocks.map((i) => `<li>${i.title}</li>`).join(``);

        await sendResponse(res, HttpCode.OK, `<ul>${message}</ul>`);
      } catch (err) {
        await sendResponse(res, HttpCode.NOT_FOUND, notFoundMessageText);
      }
      break;
    default:
      await sendResponse(res, HttpCode.NOT_FOUND, notFoundMessageText);
  }
};

const startServer = (port) => {
  const server = http.createServer(handleRequests);

  server
    .listen(port)
    .on(`listening`, () => {
      console.info(chalk.green(`Server started on port: ${port}`));
    })
    .on(`error`, ({message}) => {
      console.error(chalk.red(`Start server error: ${message}`));
    });
};

const sendResponse = (res, statusCode, message) => {
  const template = `
    <!Doctype html>
      <html lang="ru">
      <head>
        <title>With love from Node</title>
      </head>
      <body>${message}</body>
    </html>`.trim();

  res.writeHead(statusCode, {
    'Content-Type': `text/html; charset=UTF-8`,
  });

  res.end(template);
};

module.exports = {
  name: `--server`,
  run(customPort) {
    const port = Number(customPort) || DEFAULT_PORT;
    startServer(port);
  }
};
