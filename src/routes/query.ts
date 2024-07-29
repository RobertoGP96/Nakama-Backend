import { Router } from 'express'

import { Query } from '../controllers/query.js'

export const QueryRouter = Router()

QueryRouter.get('/', Query.getAll)
QueryRouter.get('/:id', Query.getByID)
QueryRouter.post('/:id', Query.create)

QueryRouter.delete('/:id', Query.delete)
QueryRouter.put('/:id', Query.update)
