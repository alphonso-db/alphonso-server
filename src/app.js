import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import helmet from 'koa-helmet';
import json from 'koa-json';
import onerror from 'koa-onerror';
import convert from 'koa-convert';
const router = require('koa-router')();

import connect from './routes/v1/connect/connect.api';

const app = new Koa();

app.use(convert(bodyParser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(convert(helmet()));

app.use(async (ctx, next) => {
	const start = new Date();
	await next();

	const ms = new Date() - start;
	console.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

router.use('/api/v1/connection', connect.routes(), connect.allowedMethods());

app.use(router.routes(), router.allowedMethods());

app.on('error', (error, ctx) => {
	logger.error('server error', error, ctx);
});

module.exports = app;
