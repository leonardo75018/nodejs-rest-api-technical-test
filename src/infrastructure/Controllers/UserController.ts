import { Request, Response } from 'express'
import { UserService } from '../services/UserService'
import { UpdateUserTypeParams } from '../../domain/types/UpdateUserTypeParams'

const userService = new UserService()
export class UserController {
  async createUser(req: Request, res: Response) {
    const { pass_id, first_name, last_name, age, phone_number, address } =
      req.body
    const user = await userService.createUser({
      pass_id,
      first_name,
      last_name,
      age,
      phone_number,
      address
    })
    res.status(200).send(user)
  }

  async findAll(req: Request, res: Response) {
    const users = await userService.findUsers()
    res.status(200).send(users)
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params
    const user = await userService.findUserById(id)
    res.status(200).send(user)
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params
    await userService.deleteUser(id)
    response.status(204).send()
  }

  async update(request: Request, response: Response) {
    const { id } = request.params
    const { first_name, last_name, age, phone_number, address, pass_id } =
      request.body

    const updateData: UpdateUserTypeParams = {
      userId: id,
      first_name,
      last_name,
      age,
      phone_number,
      address,
      pass_id
    }

    await userService.updateUser(updateData)
    response.status(204).send()
  }
}
