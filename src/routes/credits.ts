import { Router } from 'express'

import { Credits } from '../controllers/credits'

export const CreditsRouter = Router()

CreditsRouter.get('/', Credits.getAll)
CreditsRouter.get('/:id', Credits.getByID)
CreditsRouter.post('/:id', Credits.create)

CreditsRouter.delete('/:id', Credits.delete)
CreditsRouter.put('/:id', Credits.update)
