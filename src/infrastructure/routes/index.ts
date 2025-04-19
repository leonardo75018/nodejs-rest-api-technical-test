import expres from 'express'
import UserRoutes from './UserRoutes'
import PassRoutes from './PassRoute'
import PlaceRoutes from './PlaceRoutes'

const AppRoutes = expres.Router()

AppRoutes.use('/user', UserRoutes)
AppRoutes.use('/pass', PassRoutes)
AppRoutes.use('/place', PlaceRoutes)

export default AppRoutes
