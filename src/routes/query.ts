import { Router } from 'express'

import { QueryController } from '../controllers/query'

export const QueryRouter = Router()

QueryRouter.get('/', QueryController.getAll)
QueryRouter.get('/:id', QueryController.getByID)
QueryRouter.post('/', QueryController.create)

QueryRouter.delete('/:id', QueryController.delete)
QueryRouter.put('/:id', QueryController.update)
