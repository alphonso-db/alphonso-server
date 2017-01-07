import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import helmet from 'koa-helmet';
import json from 'koa-json';
import onerror from 'koa-onerror';
import router from 'koa-router';
import convert from 'koa-convert';

const app = new Koa();

app.use(convert(bodyParser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(convert(helmet()));
app.use(router.routes(), routes.allowedMethods());

app.use(async (ctx, next) => {
	const start = new Date();
	await next();

	const ms = new Date() - start;
	console.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

router.use('/api/v1/connection', require('./routes/v1/connect/connect.api'));

app.on('error', (error, ctx) => {
	logger.error('server error', error, ctx);
});

module.exports = app;
