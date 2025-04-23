import express from 'express'
import 'express-async-errors'

import { connectToMongoDB } from './config'
import AppRoutes from './routes'

const app = express()
const PORT = process.env.PORT || 3000

connectToMongoDB()

app.use(express.json())
app.use(AppRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
