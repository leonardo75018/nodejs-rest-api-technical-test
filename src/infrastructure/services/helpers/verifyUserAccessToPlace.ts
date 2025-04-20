import { IUser, IPlace, IPass } from '../../../domain/entities'
import verifyPassLevel from './verifyPassLevel'

import verifyPlaceAccessLevel from './verifyPlaceAccessLevel'
import verifyPlaceAgeAccess from './verifyPlaceAgeAccess'

export async function verifyUserAccessToPlace(user: IUser, place: IPlace) {
  const userPassLevel = await verifyPassLevel(user.pass_id.toString())
  const hasLevel = verifyPlaceAccessLevel(
    place.required_pass_level,
    userPassLevel
  )
  const hasAge = verifyPlaceAgeAccess(place.required_age_level, user.age)
  if (!hasLevel) {
    throw new Error('User has incorrect pass level to access this place')
  }
  if (!hasAge) {
    throw new Error(
      'User does not meet the exact age requirement to access this place'
    )
  }
  return true
}
