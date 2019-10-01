// 引入依赖
const Koa = require('koa');
const app = new Koa();
const lightning = require('./TestController');
let Router = require('koa-router');

let router = new Router();
router.get('/light1', (ctx, next) => {
    lightning.light1();
    next();

});

router.get('/light2', (ctx, next) => {
    lightning.light2();
    next();
});

router.get('close', (ctx, next) => {
    lightning.close();
    next();
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
