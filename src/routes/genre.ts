import { Router } from 'express'

import { Genre } from '../controllers/genre'

export const GenreRouter = Router()

GenreRouter.get('/', Genre.getAll)
GenreRouter.get('/:id', Genre.getByID)
