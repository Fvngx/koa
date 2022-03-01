import Router from "koa-router";
import AdminController from "../controller/AdminController";

const router = new Router()

router.get('/admins', AdminController.getAdminList)
router.post('/admins', AdminController.addAdmin)

export default router
