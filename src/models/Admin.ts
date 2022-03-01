import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

export interface AdminProp {
  id?:number
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date
  name?: string
  password?: string
  mobile?: string
  email?: string
}

@Table({modelName: 'admins'})
export default class Admin extends Model<AdminProp> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id!: number
  @Column
  name!: string
  @Column
  password!: string
  @Column
  mobile?: string
  @Column
  email?: string
}