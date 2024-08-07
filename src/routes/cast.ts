import { Router } from 'express'

import { Cast } from '../controllers/cast'

export const CastRouter = Router()

CastRouter.get('/', Cast.getAll)
CastRouter.get('/:id', Cast.getByID)
