import { Router } from 'express'

import { MiList } from '../controllers/milist.js'

export const MiListRouter = Router()

MiListRouter.get('/', MiList.getAll)
MiListRouter.get('/:id', MiList.getByID)
MiListRouter.post('/:id', MiList.create)

MiListRouter.delete('/:id', MiList.delete)
MiListRouter.put('/:id', MiList.update)
