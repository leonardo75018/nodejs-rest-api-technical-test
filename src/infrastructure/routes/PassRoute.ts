import express from 'express'
import PassController from '../Controllers/PassController'

const PassRoutes = express.Router()
const passController = new PassController()

PassRoutes.post('/', passController.create)
PassRoutes.get('/', passController.findAll)
PassRoutes.get('/:id', passController.findById)
PassRoutes.delete('/:id', passController.delete)
PassRoutes.put('/:id', passController.update)

export default PassRoutes
