// 引入依赖
const Koa = require('koa');
const app = new Koa();
const lightning = require('./TestController');
let Router = require('koa-router');

let router = new Router();
router.get('/light1', (ctx, next) => {
    try {
        lightning.light1();
    }
    catch (e) {
        console.log(e)
    }
    ctx.body = 'light1 enabled';
    next();

});

router.get('/light2', (ctx, next) => {
    try {
        lightning.light2();
    }
    catch (e) {
        console.log(e)
    }
    ctx.body = 'light2 enabled';
    next();
});

router.get('close', (ctx, next) => {
    try {
        lightning.close();
    }
    catch (e) {
        console.log(e)
    }
    ctx.body = 'all disabled';
    next();
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
