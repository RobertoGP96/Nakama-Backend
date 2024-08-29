import { Router } from 'express'

import { OmdbController } from '../controllers/omdb'

export const OmdbRouter = Router()

OmdbRouter.post('/:type/:title/:year', OmdbController.getByTitle)
OmdbRouter.post('/:type/:id/:year', OmdbController.getByID)
OmdbRouter.post('/:type/:search/:year', OmdbController.Search)