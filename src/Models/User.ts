import mongoose, { Document, Schema } from 'mongoose'

export interface User extends Document {
  first_name: string
  last_name: string
  age: number
  phone_number: string
  address: string
  pass_id: mongoose.Types.ObjectId
  created_at: Date
  updated_at: Date
}

const UserSchema: Schema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: { type: Number, required: true },
    phone_number: { type: String, required: true },
    address: { type: String, required: true },
    pass_id: { type: Schema.Types.ObjectId, ref: 'Pass', required: true }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

export default mongoose.model<User>('User', UserSchema)
