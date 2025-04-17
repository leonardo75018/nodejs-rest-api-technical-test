import { IPlace } from '../entities'

export interface IPlaceService {
  createPlace(): Promise<IPlace>
  findPlaceById(): Promise<IPlace>
  findAllPlaces(): Promise<IPlace[]>
  updatePlace(): Promise<IPlace>
  deletePlace(): Promise<void>
}
