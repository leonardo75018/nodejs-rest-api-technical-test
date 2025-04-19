import { Request, Response } from 'express'
import { PassService } from '../services'

const passService = new PassService()

class PassController {
  async create(request: Request, response: Response) {
    const { level } = request.body
    const pass = await passService.createPass(level)
    response.status(200).json(pass)
  }

  async findAll(request: Request, response: Response) {
    const passes = await passService.findAllPass()
    response.status(200).json(passes)
  }
}

export default PassController
