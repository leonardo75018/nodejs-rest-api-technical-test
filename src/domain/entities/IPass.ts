import { Types } from 'mongoose'

export interface IPass {
  _id: Types.ObjectId
  level: number
  created_at: Date
  updated_at: Date
}
