import Admin, { AdminProp } from "../models/Admin";

class AdminService {
  getAdmin() {
    const admin: Promise<AdminProp[] | null> = Admin.findAll()
    return admin
  }
  addAdmin(admin: AdminProp) {
    return Admin.create(admin)
  }
}

export default new AdminService