import 'dotenv/config'
import express from 'express'
import 'express-async-errors'

import { connectToMongoDB } from './config'
import AppRoutes from './routes'

const app = express()

connectToMongoDB()

app.use(AppRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
