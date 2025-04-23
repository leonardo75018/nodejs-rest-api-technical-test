import { Types } from 'mongoose'

export interface IPlace {
  _id: Types.ObjectId
  address: string
  phone_number: string
  required_pass_level: number
  required_age_level: number
  created_at: Date
  updated_at: Date
}
