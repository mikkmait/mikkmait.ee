import express from 'express';
import { MongoClient } from 'mongodb';
import chalk from 'chalk';
import Debug from 'debug';
import { fileURLToPath } from 'url';
import path from 'path';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 7088;
const debug = Debug('app');
const articlesRouter = express.Router();

const atlasUrl = process.env.ATLAS_URL;
const client = new MongoClient(atlasUrl);
const dbName = client.db('angularTest');
const articles = dbName.collection('articles');

const queryArticles = {category: any};
const returnArticles = { _id: 0, category: 1, articleHeading: 1, articleContent: 1, date: 1, time: 1, author: 1};

articlesRouter.route('/').get((req, res) => {
  (async function mongo (){
    try {
      const articleList = await articles.find(queryArticles, returnArticles).toArray();
      console.log(articleList);
      res.send(articleList).status(200);
    } catch (error) {
      debug(error.stack);
    }
  }())
})

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
const whitelist = ['https://mikkmait.github.io'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed on CORS'));
    }
  }
};

app.use(cors());

app.use('/articles', articlesRouter);

app.listen(PORT, () => {
  debug(`listening to port ${chalk.green(PORT)}`);
});
