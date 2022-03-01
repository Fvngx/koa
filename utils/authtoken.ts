import jwt from 'jsonwebtoken'
import config from '../src/config'

const sign = (data:any) => {
  jwt.sign(data, config.jwt.jwt_secret, {expiresIn: config.jwt.jwt_expire})
}
const verify = (token: string) => {
  try {
    const decoded = jwt.verify(token, config.jwt.jwt_secret)
    return {
      admin: decoded,
      error: null,
    }
  } catch (error) {
    return {
      admin: null,
      error
    }
  }
}

export default {
  sign,
  verify
}
