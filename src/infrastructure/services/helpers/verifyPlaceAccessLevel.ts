import { PassService } from '../../services'

const passService = new PassService()

function verifyPlaceAccessLevel(
  placeRequiredLevel: number,
  userPassLevel: number
) {
  return userPassLevel === placeRequiredLevel
}

export default verifyPlaceAccessLevel
