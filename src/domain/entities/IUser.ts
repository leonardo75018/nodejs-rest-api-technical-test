import { Types } from 'mongoose'

export interface IUser {
  first_name: string
  last_name: string
  age: number
  phone_number: string
  address: string
  pass_id: Types.ObjectId
  created_at: Date
  updated_at: Date
}
