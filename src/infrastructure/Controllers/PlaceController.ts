import { Request, Response } from 'express'
import { PlaceService } from '../services/PlaceService'
import { UpdatePlaceTypeParams } from '../../domain/types'
PlaceService
import { Types } from 'mongoose'
import { AppError } from '../utils'
const placeService = new PlaceService()

export class PlaceController {
  async getAll(request: Request, response: Response) {
    const places = await placeService.findAllPlaces()
    response.status(200).json(places)
  }

  async create(request: Request, response: Response) {
    const { address, phone_number, required_pass_level, required_age_level } =
      request.body
    const place = await placeService.createPlace({
      address,
      phone_number,
      required_age_level,
      required_pass_level
    })
    response.status(200).send(place)
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params
    await placeService.deletePlace(id)
    response.status(204).send()
  }

  async update(request: Request, response: Response) {
    const { id } = request.params
    const { address, phone_number, required_pass_level, required_age_level } =
      request.body

    const updateData: UpdatePlaceTypeParams = {
      id,
      address,
      phone_number,
      required_pass_level,
      required_age_level
    }

    await placeService.updatePlace(updateData)
    response.status(204).send()
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params
    const place = await placeService.findPlaceById(id)
    res.status(200).send(place)
  }

  async checkAccess(request: Request, response: Response) {
    const { userId, placeId } = request.params

    const access = await placeService.checkAccessToRoute(userId, placeId)
    response.status(200).send(access)
  }

  async accessiblePlacesForUser(request: Request, response: Response) {
    const { userId } = request.params

    const access = await placeService.findAccessiblePlacesForUser(userId)
    response.status(200).send(access)
  }
}
