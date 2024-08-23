import { Router } from 'express'

import { ElementController } from '../controllers/element'

export const ElementRouter = Router()

ElementRouter.get('/', ElementController.getAll)
ElementRouter.get('/:id', ElementController.getByID)
ElementRouter.post('/', ElementController.create)

ElementRouter.delete('/:id', ElementController.delete)
ElementRouter.put('/:id', ElementController.update)
