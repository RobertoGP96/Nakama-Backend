import { Router } from 'express'

import { ResourceController } from '../controllers/resource'

export const ResourceRouter = Router()

ResourceRouter.get('/', ResourceController.getAll)
ResourceRouter.get('/:id', ResourceController.getByID)
ResourceRouter.post('/', ResourceController.create)

ResourceRouter.delete('/:id', ResourceController.delete)
ResourceRouter.put('/:id', ResourceController.update)
