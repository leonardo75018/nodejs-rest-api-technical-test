import mongoose from 'mongoose'

const uri = process.env.MONGODB_URI || 'mongodb://mongo:27017/placeapi'

export const connectToMongoDB = async () => {
  console.log('🔍 Trying to connect to MongoDB...')
  try {
    await mongoose.connect(uri)
    console.log('✅ Connected to MongoDB')
  } catch (err) {
    console.error('❌ MongoDB connection error:', err)
    process.exit(1)
  }
}
