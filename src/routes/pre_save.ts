import { Router } from 'express'

import { PreSaveController } from '../controllers/pre_save'

export const PreSaveRouter = Router()

PreSaveRouter.get('/', PreSaveController.getAll)
PreSaveRouter.get('/:id', PreSaveController.getByID)

PreSaveRouter.delete('/:id', PreSaveController.delete)
PreSaveRouter.post('/:id', PreSaveController.create)
PreSaveRouter.put('/:id', PreSaveController.update)