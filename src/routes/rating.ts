import { Router } from 'express'

import { Rating } from '../controllers/rating'

export const RatingRouter = Router()

RatingRouter.get('/', Rating.getAll)
RatingRouter.get('/:id', Rating.getByID)
