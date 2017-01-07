import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import helmet from 'koa-helmet';

const app = new Koa();

app.use(bodyParser());
app.use(logger());
app.use(helmet());

module.exports = app;
