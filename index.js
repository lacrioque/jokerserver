const Koa = require("koa");
const serve = require("koa-static");
const mount = require("koa-mount");
const bodyparser = require("koa-bodyparser");

const socketio = require("socket.io");

const app = new Koa();
app.use(bodyparser());

const statusRoute = new Koa();
const 