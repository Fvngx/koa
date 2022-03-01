import dotenv from 'dotenv'
dotenv.config()
import Koa from 'koa'
import KoaBody from 'koa-body'
import {Server} from 'http'
import router from './router'
import db from './db'
import AccessLogMiddleware from './middleware/AccessLogMiddleware'
import koaBody from 'koa-body'

db()

const app = new Koa()

app.use(koaBody())
    .use(AccessLogMiddleware)
    .use(router.routes())

const run = (port: number):Server => {
  return app.listen(port)
}

export default run