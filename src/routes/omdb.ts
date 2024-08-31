import { Router } from 'express'

import { OmdbController } from '../controllers/omdb'

export const OmdbRouter = Router()

OmdbRouter.get('/:type/:title/?:year', OmdbController.getByTitle)
OmdbRouter.get('/:type/:id/?:year', OmdbController.getByID)
OmdbRouter.get('/:type/:search/?:year', OmdbController.Search)