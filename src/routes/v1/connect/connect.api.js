import router from 'koa-router';

router.get('/connect', (ctx, next) => {
	ctx.body = 'Trying to connect Mongodb server!';
});

module.exports = router;
