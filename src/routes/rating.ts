import { Router } from 'express'

import { Rating } from '../controllers/rating.js'

export const RatingRouter = Router()

RatingRouter.get('/', Rating.getAll)
RatingRouter.get('/:id', Rating.getByID)
RatingRouter.post('/:id', Rating.create)

RatingRouter.delete('/:id', Rating.delete)
RatingRouter.put('/:id', Rating.update)
