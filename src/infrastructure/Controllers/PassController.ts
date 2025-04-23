import { Request, Response } from 'express'
import { PassService } from '../services'
import { UpdatePassTypeParams } from '../../domain/types'

const passService = new PassService()

class PassController {
  async create(request: Request, response: Response) {
    const pass = await passService.createPass(request.body)
    response.status(200).json(pass)
  }

  async findAll(request: Request, response: Response) {
    const passes = await passService.findAllPass()
    response.status(200).json(passes)
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params
    await passService.deletePass(id)
    response.status(204).send()
  }

  async update(request: Request, response: Response) {
    const { id } = request.params
    const { level } = request.body
    const updateData: UpdatePassTypeParams = {
      passId: id,
      level: Number(level)
    }

    await passService.updatePass(updateData)
    response.status(204).send()
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params
    const pass = await passService.findPassById(id)
    res.status(200).send(pass)
  }
}

export default PassController
