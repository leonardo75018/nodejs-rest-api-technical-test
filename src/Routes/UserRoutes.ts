import express from 'express'
import { UserController } from '../Controllers'

const UserRoutes = express.Router()
const userController = new UserController()

UserRoutes.get('/', userController.getUser)

export default UserRoutes
