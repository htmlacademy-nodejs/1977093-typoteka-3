'use strict';

const express = require(`express`);
const path = require(`path`);
const router = require(`./routes`);

const PORT = 8080;
const PUBLIC_DIR = `public`;
const app = express();

app.locals.globalVariables = {authorized: true, admin: false};

app.set(`views`, path.resolve(__dirname, `./templates`));
app.set(`view engine`, `pug`);

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));
app.use(router);

app.listen(PORT, () => {
  console.info(`Server started on port ${PORT}`);
});
