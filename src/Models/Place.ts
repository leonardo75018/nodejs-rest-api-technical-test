import mongoose, { Schema, Document } from 'mongoose'

export interface Place extends Document {
  address: string
  phone_number: string
  required_pass_level: number
  required_age_level: number
  created_at: Date
  updated_at: Date
}

const PlaceSchema: Schema = new Schema(
  {
    address: { type: String, required: true },
    phone_number: { type: String, required: true },
    required_pass_level: { type: Number, required: true },
    required_age_level: { type: Number, required: true }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

export default mongoose.model<Place>('Place', PlaceSchema)
