import { Router } from 'express'

import { CreditsController } from '../controllers/credits'

export const CreditsRouter = Router()

CreditsRouter.get('/', CreditsController.getAll)
CreditsRouter.get('/:id', CreditsController.getByID)
