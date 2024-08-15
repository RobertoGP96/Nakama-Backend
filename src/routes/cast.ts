import { Router } from 'express'

import { CastController } from '../controllers/cast'

export const CastRouter = Router()

CastRouter.get('/', CastController.getAll)
CastRouter.get('/:id', CastController.getByID)
