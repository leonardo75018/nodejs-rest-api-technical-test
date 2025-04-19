import express from 'express'
import PassController from '../Controllers/PassController'

const PassRoutes = express.Router()
const passController = new PassController()

PassRoutes.post('/', passController.create)
PassRoutes.get('/', passController.findAll)

export default PassRoutes
