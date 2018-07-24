const koa = require('./koa/index');
const Router = require('./koa-router/lib/router');
const koaBody = require('koa-body');

const app = new koa();
const port = process.env.PORT || 3000;
const router = new Router();
// x-response-time
app.use(async (ctx, next) =>{
  var start = new Date;
  await next();
  var ms = new Date - start;
  ctx.set('X-Response-Time', ms + 'ms');
});
// logger
app.use(async (ctx, next) =>{
  var start = new Date;
  await next();
  var ms = new Date - start;
  console.log('%s %s - %s', ctx.method, ctx.url, ms);
});
// response
app.use(async (ctx, next) =>{
  ctx.body = 'Hello World';
  await next();
});
router.get('/',async (ctx, next) => {
  ctx.body = 'Index Page';
  // ctx.response.body = {
  //   status: '200'
  // };
})
router.get('/a',async (ctx, next) => {
  ctx.body = 'Index Page A';
  // ctx.response.body = {
  //   status: '200'
  // };
})
router.get('/a/:id',async (ctx, next) => {
  ctx.body = 'Index Page A';
  // ctx.response.body = {
  //   status: '200'
  // };
})
router.get('/b',async (ctx, next) => {
  ctx.body = 'Index Page B';
  // ctx.response.body = {
  //   status: '200'
  // };
})
app.use(router.routes());
app.listen(port, () => {
  console.log(`listen on port: ${port}`);
});