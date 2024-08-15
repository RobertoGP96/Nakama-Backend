import { Router } from 'express'

import { RatingController } from '../controllers/rating'

export const RatingRouter = Router()

RatingRouter.get('/', RatingController.getAll)
RatingRouter.get('/:id', RatingController.getByID)
