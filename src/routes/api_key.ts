import { Router } from 'express'

import { ApiKeyController } from '../controllers/api_key'

export const ApiKeyRouter = Router()

ApiKeyRouter.get('/', ApiKeyController.getAll)
ApiKeyRouter.get('/:id', ApiKeyController.getByID)
ApiKeyRouter.post('/', ApiKeyController.create)
ApiKeyRouter.put('/:id', ApiKeyController.update)
ApiKeyRouter.delete('/:id', ApiKeyController.delete)
ApiKeyRouter.put('/change_status/:id', ApiKeyController.changeStatus)
