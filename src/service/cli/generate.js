'use strict';

const fs = require(`fs`).promises;
const moment = require(`moment`);
const path = require(`path`);
const chalk = require(`chalk`);
const {nanoid} = require(`nanoid`);
const {ExitCode, MAX_ID_LENGTH} = require(`../constants`);
const {getRandomInt, shuffle, formatDate} = require(`../utils`);

const DEFAULT_COUNT = 1;
const MAX_COUNT = 1000;

const FILE_NAME = `mocks.json`;
const FilePath = {
  TITLES: `./data/titles.txt`,
  CATEGORIES: `./data/categories.txt`,
  SENTENCES: `./data/sentences.txt`,
  COMMENTS: `./data/comments.txt`,
};

const readContent = async (filePath) => {
  filePath = path.resolve(__dirname, filePath);

  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.trim().split(`\n`);
  } catch (err) {
    console.error(chalk.red(err));
    return [];
  }
};

const generateArticles = async (count) => {
  const [titles, categories, sentences, comments] = await Promise.all([
    readContent(FilePath.TITLES),
    readContent(FilePath.CATEGORIES),
    readContent(FilePath.SENTENCES),
    readContent(FilePath.COMMENTS),
  ]);

  return Array(count).fill({}).map(() => ({
    id: nanoid(MAX_ID_LENGTH),
    title: titles[getRandomInt(0, titles.length - 1)],
    announce: shuffle(sentences).slice(0, getRandomInt(1, 5)).join(` `),
    fullText: shuffle(sentences).slice(0, getRandomInt(5, sentences.length - 1)).join(` `),
    createdDate: formatDate(moment().subtract(getRandomInt(0, 90), `days`)),
    category: shuffle(categories).slice(0, getRandomInt(1, categories.length - 1)),
    comments: generateComments(getRandomInt(1, 5), comments),
  }));
};

const saveArticles = async (data) => {
  const rootFolder = path.resolve(`./`, FILE_NAME);

  try {
    await fs.writeFile(rootFolder, JSON.stringify(data));
    console.log(chalk.green(`Operation success. File created.`));
    process.exit(ExitCode.SUCCESS);
  } catch (err) {
    console.error(chalk.red(`Can't write data to file...`));
    console.info(chalk.red(`Error details:\n`), err);
    process.exit(ExitCode.ERROR);
  }
};

const generateComments = (count, comments) => (
  Array(count).fill({}).map(() => ({
    id: nanoid(MAX_ID_LENGTH),
    text: shuffle(comments).slice(0, getRandomInt(1, comments.length - 1)).join(` `)
  }))
);

module.exports = {
  name: `--generate`,
  async run(count) {
    const articlesCount = Number(count) || DEFAULT_COUNT;

    if (articlesCount > MAX_COUNT) {
      console.error(chalk.red(`Не больше 1000 объявлений`));
      return;
    }

    const articles = await generateArticles(articlesCount);
    await saveArticles(articles);
  }
};
