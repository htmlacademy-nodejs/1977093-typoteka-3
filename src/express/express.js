'use strict';

const express = require(`express`);
const router = require(`./routes`);

const PORT = 8080;
const app = express();

app.use(router);

app.listen(PORT, () => {
  console.info(`Server started on port ${PORT}`);
});
