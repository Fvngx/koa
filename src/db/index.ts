import path from 'path'
import { Sequelize } from 'sequelize-typescript'
import config from '../config'
import { dbLogger } from '../logger'


const sequelize = new Sequelize(config.db.db_name, config.db.db_user, config.db.db_password, {
  host: config.db.db_host,
  port: +config.db.db_port,
  // dialect: /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
  dialect: 'mysql',
  logging: msg => dbLogger.info(msg),
  define: {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
  },
  models: [path.join(__dirname, '..', 'models/**/*.ts'), path.join(__dirname, '..', 'models/&&/*.js')],
})

const db = async () => {
  await sequelize.sync({force: true}).then(() => {
    console.log('Connection has been established successfully.');
  }).catch(err => {
    console.log('Unable to connect to the database: ', err);
  })
}

export default db
