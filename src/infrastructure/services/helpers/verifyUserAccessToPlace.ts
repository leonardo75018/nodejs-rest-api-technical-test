import { IUser, IPlace, IPass } from '../../../domain/entities'
import { PassService, PlaceService, UserService } from '../../services'

import verifyPlaceAccessLevel from './verifyPlaceAccessLevel'
import verifyPlaceAgeAccess from './verifyPlaceAgeAccess'
// const passService = new PassService()

const test = new PlaceService()
async function verifyUserAccessToPlace(user: IUser, place: IPlace) {
  // async function verifyPassLevel(passId: string): Promise<number> {
  //   const pass = (await passService.findPassById(passId)) as IPass
  //   return pass.level
  // }
  // const userPassLevel = await verifyPassLevel(user.pass_id.toString())
  // const hasLevel = verifyPlaceAccessLevel(
  //   place.required_pass_level,
  //   userPassLevel
  // )
  // const hasAge = verifyPlaceAgeAccess(place.required_age_level, user.age)
  // if (!hasLevel) {
  //   throw new Error('User has incorrect pass level to access this place')
  // }
  // if (!hasAge) {
  //   throw new Error(
  //     'User does not meet the exact age requirement to access this place'
  //   )
  // }
  // return true
}
