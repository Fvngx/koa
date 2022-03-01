import { Rules } from "async-validator";
import { createHash } from "crypto";
import { Context } from "koa";
import response from "../../utils/response";
import validate from "../../utils/validate";
import Logger from '../logger'
import AdminService from "../service/AdminService";

class AdminController {
  async getAdminList(ctx:Context) {
    const admin = await AdminService.getAdmin()
    Logger.info('msg', 'msg')
    // ctx.body = admin
    response.success(ctx, admin)
  }
  async addAdmin(ctx: Context) {
    const rules:Rules = {
      name: {
        type: 'string',
        required: true,
        message: '用户名不能为空',
      },
      password: [{
        type: 'string',
        required: true,
        message: '密码不能为空',
      }, {
        min: 6,
        message: '密码长度不可以小于6位',
      }]
    }
    const {data, error} = await validate(ctx, rules)
    if (error !== null) {
      return response.error(ctx, error)
    }
    data.password = createHash('md5').update(data.password).digest('hex')

    const row = await AdminService.addAdmin(data)
    if (row.id > 0) {
      return response.success(ctx)
    }
    return response.error(ctx, '创建失败')
  }
}

export default new AdminController