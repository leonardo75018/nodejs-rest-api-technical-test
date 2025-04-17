import expres from 'express'
import UserRoutes from './UserRoutes'

const AppRoutes = expres.Router()

AppRoutes.use('/user', UserRoutes)

export default AppRoutes
