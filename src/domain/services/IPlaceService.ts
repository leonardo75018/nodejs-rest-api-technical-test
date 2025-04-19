import { IPlace } from '../entities'
import { CreatePlaceTypeParams } from '../types'
import { UpdatePlaceTypeParams } from '../types/UpdatePlaceTypeParams'

export interface IPlaceService {
  createPlace(createPlaceTypeParams: CreatePlaceTypeParams): Promise<IPlace>
  findPlaceById(placeId: string): Promise<IPlace | null>
  findAllPlaces(): Promise<IPlace[]>
  updatePlace(updatePlaceTypeParams: UpdatePlaceTypeParams): Promise<IPlace>
  deletePlace(placeId: string): Promise<void>
}
