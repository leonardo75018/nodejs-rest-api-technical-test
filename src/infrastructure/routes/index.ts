import expres from 'express'
import UserRoutes from './UserRoutes'
import PassRoutes from './PassRoute'

const AppRoutes = expres.Router()

AppRoutes.use('/user', UserRoutes)
AppRoutes.use('/pass', PassRoutes)

export default AppRoutes
