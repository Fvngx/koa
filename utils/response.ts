import { Context } from "koa"

const success = (ctx:Context, data:any=[], msg:string='success',code:number=0) => {
  ctx.body = {
    code,
    msg,
    data
  }
}
const error = (ctx:Context, msg:string='error', data:any=[], code:number=1) => {
  ctx.body = {
    code,
    msg,
    data
  }
}

export default {
  success,
  error
}