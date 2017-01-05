import path from 'path';
import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import staticServe from 'koa-static';
import CONFIG from '../configs/stack.conf';

let app = koa();

app.use(bodyParser());
app.use(logger());

app.use(staticServe(path.join(__dirname, CONFIG.stack.client)));

module.exports = app;
