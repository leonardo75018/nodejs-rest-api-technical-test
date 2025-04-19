import { IPlace } from '../../domain/entities'
import { IPlaceService } from '../../domain/services/index'
import Place from '../models/Place'
import { AppError } from '../utils'
import {
  CreatePlaceTypeParams,
  UpdatePlaceTypeParams
} from '../../domain/types'
import { validatePassLevel } from '../helpers'

export class PlaceService implements IPlaceService {
  async createPlace(
    createPlaceTypeParams: CreatePlaceTypeParams
  ): Promise<IPlace> {
    try {
      const isValidLevel = validatePassLevel(
        createPlaceTypeParams.required_pass_level
      )

      if (!isValidLevel) {
        throw new AppError('Pass level must be between 1 and 5', 400)
      }

      const place = new Place(createPlaceTypeParams)
      await place.save()
      return place.toObject()
    } catch (err) {
      if (err instanceof AppError) {
        throw err
      }
      throw new AppError('Failed to create place', 500)
    }
  }
  async findAllPlaces(): Promise<IPlace[]> {
    try {
      const places = await Place.find()
      return places.map(p => p.toObject())
    } catch (err) {
      throw new AppError('Failed to retrieve place', 500)
    }
  }

  async findPlaceById(placeId: string): Promise<IPlace | null> {
    const place = await Place.findById(placeId)
    if (!place) {
      throw new AppError('Place not found', 404)
    }
    return place.toObject()
  }

  async updatePlace(params: UpdatePlaceTypeParams): Promise<IPlace> {
    const place = await Place.findByIdAndUpdate(
      params.id,
      { params },
      { new: true }
    )
    if (!place) {
      throw new AppError('Place not found', 404)
    }
    return place.toObject()
  }

  async deletePlace(placeId: string): Promise<void> {
    const result = await Place.findByIdAndDelete(placeId)
    if (!result) {
      throw new AppError('Place not found', 404)
    }
  }
}
