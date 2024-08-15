import { Router } from 'express'

import { GenreController } from '../controllers/genre'

export const GenreRouter = Router()

GenreRouter.get('/', GenreController.getAll)
GenreRouter.get('/:id', GenreController.getByID)
