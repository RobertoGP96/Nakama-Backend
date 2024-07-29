import { Router } from 'express'

import { Genre } from '../controllers/genre.js'

export const GenreRouter = Router()

GenreRouter.get('/', Genre.getAll)
GenreRouter.get('/:id', Genre.getByID)
GenreRouter.post('/:id', Genre.create)

GenreRouter.delete('/:id', Genre.delete)
GenreRouter.put('/:id', Genre.update)
