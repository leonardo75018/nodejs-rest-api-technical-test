import mongoose, { Schema, Document } from 'mongoose'

export interface Pass extends Document {
  level: number
  created_at: Date
  updated_at: Date
}

const PassSchema: Schema = new Schema(
  {
    level: { type: Number, required: true, min: 1, max: 5 }
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
)

export default mongoose.model<Pass>('Pass', PassSchema)
