import router from 'koa-router';

router.get('/connect', function *(next) {
	console.log('connect api');
});

module.exports = router;
