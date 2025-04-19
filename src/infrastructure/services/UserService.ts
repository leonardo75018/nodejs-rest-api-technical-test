import { IUser } from '../../domain/entities'
import { IUseService } from '../../domain/services/index'
import User from '../models/User'
import { AppError } from '../utils'
import { CreateUserTypeParams } from '../../domain/types'
import { PassService } from './PassService'

export class PlaceService {
  passService = new PassService()

  // async createUser(createUserTypeParams: CreateUserTypeParams): Promise<IUser> {
  //   try {
  //     const pass = await this.passService.findPassById(
  //       createUserTypeParams.pass_id
  //     )
  //     if (!pass) {
  //       throw new AppError('Pass not found', 404)
  //     }

  //     const user = new User(createUserTypeParams)
  //     await user.save()
  //     return user.toObject()
  //   } catch (err) {
  //     throw new AppError('Failed to create user', 500)
  //   }
  // }

  //   try {
  //     const places = await Place.find()
  //     return places.map(p => p.toObject())
  //   } catch (err) {
  //     throw new AppError('Failed to retrieve place', 500)
  //   }
  // }

  // async findPlaceById(placeId: string): Promise<IPlace | null> {
  //   const place = await Place.findById(placeId)
  //   if (!place) {
  //     throw new AppError('Place not found', 404)
  //   }
  //   return place.toObject()
  // }

  // async updatePlace(params: UpdatePlaceTypeParams): Promise<IPlace> {
  //   const place = await Place.findByIdAndUpdate(
  //     params.id,
  //     { params },
  //     { new: true }
  //   )
  //   if (!place) {
  //     throw new AppError('Place not found', 404)
  //   }
  //   return place.toObject()
  // }

  // async deletePlace(placeId: string): Promise<void> {
  //   const result = await Place.findByIdAndDelete(placeId)
  //   if (!result) {
  //     throw new AppError('Place not found', 404)
  //   }
  // }
}
