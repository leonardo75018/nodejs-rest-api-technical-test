import { Request, Response } from 'express'
import { PlaceService } from '../services/PlaceService'
PlaceService

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
}
