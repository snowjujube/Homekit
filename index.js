// 引入依赖
const Koa = require('koa');
const app = new Koa();
const underLight = require('./UnderLight');
let Router = require('koa-router');

let router = new Router();

// 床灯控制：开
router.get('/uopen', (ctx, next) => {
    try {
        underLight.open();
    } catch (e) {
        console.log(e)
    }
    ctx.body = {
        status: true
    };
    next();

});

// 床灯控制：关
router.get('/uclose', (ctx, next) => {
    try {
        underLight.close();
    } catch (e) {
        console.log(e)
    }
    ctx.body = {
        status: false
    };
    next();
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
