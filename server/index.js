const Koa = require('koa');
const server = new Koa();
const router = require('../routes.js');
const db = require('../db.js');
// const Booking = require('../models/booking')

server
  .use(router.routes())
  .use(router.allowedMethods());

server.listen(3000);
