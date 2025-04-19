import express from 'express'
import { PlaceController } from '../Controllers/PlaceController'

const PlaceRoutes = express()
const placeController = new PlaceController()

PlaceRoutes.get('/', placeController.getAll)
PlaceRoutes.post('/', placeController.create)

export default PlaceRoutes
