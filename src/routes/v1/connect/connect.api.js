const router = require('koa-router')();

router.get('/connect', function(ctx, next) {
	ctx.body = 'Trying to connect Mongodb server!';
});

module.exports = router;
