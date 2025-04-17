import 'dotenv/config'
import express from 'express'
import { connectToMongoDB } from './Config'
import AppRoutes from './Routes'

const app = express()

connectToMongoDB()

app.use(AppRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
