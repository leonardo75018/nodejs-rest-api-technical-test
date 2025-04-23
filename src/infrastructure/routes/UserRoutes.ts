import express from 'express'
import { UserController } from '../Controllers'

const UserRoutes = express.Router()
const userController = new UserController()

UserRoutes.post('/', userController.createUser)
UserRoutes.get('/', userController.findAll)
UserRoutes.get('/:id', userController.findById)
UserRoutes.delete('/:id', userController.delete)
UserRoutes.put('/:id', userController.update)

export default UserRoutes
