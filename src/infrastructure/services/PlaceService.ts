import { IPlace } from '../../domain/entities'
import { IPlaceService } from '../../domain/services/index'
import Place from '../models/Place'
import { AppError } from '../utils'
import {
  CreatePlaceTypeParams,
  UpdatePlaceTypeParams
} from '../../domain/types'
import { validatePassLevel } from './validators/validatePassLevel'
import { verifyUserAccessToPlace } from './helpers'
import { UserService } from './UserService'

const userService = new UserService()
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
      return place.toObject() as IPlace
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
      return places.map(p => p.toObject()) as IPlace[]
    } catch (err) {
      throw new AppError('Failed to retrieve place', 500)
    }
  }

  async findPlaceById(placeId: string): Promise<IPlace> {
    const place = await Place.findById(placeId)
    if (!place) {
      throw new AppError('Place not found', 404)
    }
    return place.toObject() as IPlace
  }

  async updatePlace(params: UpdatePlaceTypeParams): Promise<IPlace> {
    const { id, ...updateFields } = params

    const isValidLevel = validatePassLevel(params.required_pass_level as number)
    if (!isValidLevel) {
      throw new AppError('Pass level must be between 1 and 5', 400)
    }

    const filteredUpdateFields = Object.fromEntries(
      Object.entries(updateFields).filter(([_, value]) => value !== undefined)
    )

    const place = await Place.findByIdAndUpdate(id, filteredUpdateFields, {
      new: true
    })

    if (!place) {
      throw new AppError('Place not found', 404)
    }

    return place.toObject() as IPlace
  }

  async deletePlace(placeId: string): Promise<void> {
    const result = await Place.findByIdAndDelete(placeId)
    if (!result) {
      throw new AppError('Place not found', 404)
    }
  }

  async checkAccessToRoute(userId: string, placeId: string) {
    const user = await userService.findUserById(userId)
    const place = await this.findPlaceById(placeId)

    const verifiedUserAccesToPlace = verifyUserAccessToPlace(user, place)
    return verifiedUserAccesToPlace
  }

  async findAccessiblePlacesForUser(userId: string): Promise<IPlace[]> {
    try {
      const allPlaces: IPlace[] = await Place.find()
      const accessiblePlaces: IPlace[] = []

      for (let place of allPlaces) {
        try {
          const hasAccess = await this.checkAccessToRoute(
            userId,
            place._id.toString()
          )

          if (hasAccess) {
            accessiblePlaces.push(place)
          }
        } catch (err) {
          console.error(
            `Access denied for user ${userId} to place ${place._id}:`,
            err
          )
        }
      }

      return accessiblePlaces
    } catch (err) {
      throw new AppError('Failed to retrieve accessible places for user', 500)
    }
  }
}
