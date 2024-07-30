import { Router } from 'express'

import { NakamaElementController } from '../controllers/NakamaElement'

export const NakamaElementRouter = Router()

NakamaElementRouter.get('/', NakamaElementController.getAll)
NakamaElementRouter.get('/:id', NakamaElementController.getByID)
NakamaElementRouter.post('/:id', NakamaElementController.create)

NakamaElementRouter.delete('/:id', NakamaElementController.delete)
NakamaElementRouter.put('/:id', NakamaElementController.update)
