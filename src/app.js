import path from 'path';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
// import staticServe from 'koa-static';
import CONFIG from '../configs/stack.conf';

const app = new Koa();

app.use(bodyParser());
app.use(logger());

// app.use(staticServe(path.join(__dirname, CONFIG.stack.client)));

module.exports = app;
