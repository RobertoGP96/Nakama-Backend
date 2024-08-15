import { Router } from 'express'

import { MiListController } from '../controllers/milist'

export const MiListRouter = Router()

MiListRouter.get('/', MiListController.getAll)
MiListRouter.get('/:id', MiListController.getByID)
MiListRouter.post('/', MiListController.create)

MiListRouter.delete('/:id', MiListController.delete)
MiListRouter.put('/:id', MiListController.update)
