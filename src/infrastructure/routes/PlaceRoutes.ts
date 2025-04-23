import express from 'express'
import { PlaceController } from '../Controllers/PlaceController'

const PlaceRoutes = express()
const placeController = new PlaceController()

PlaceRoutes.get('/', placeController.getAll)
PlaceRoutes.post('/', placeController.create)
PlaceRoutes.get('/:id', placeController.findById)
PlaceRoutes.delete('/:id', placeController.delete)
PlaceRoutes.put('/:id', placeController.update)

PlaceRoutes.get('/access/:userId/:placeId', placeController.checkAccess)
PlaceRoutes.get('/accessible/:userId', placeController.accessiblePlacesForUser)

export default PlaceRoutes
