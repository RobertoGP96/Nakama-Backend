import { Router } from 'express'

import { Deparment } from '../controllers/deparment.js'

export const DeparmentRouter = Router()

DeparmentRouter.get('/', Deparment.getAll)
DeparmentRouter.get('/:id', Deparment.getByID)
DeparmentRouter.post('/:id', Deparment.create)

DeparmentRouter.delete('/:id', Deparment.delete)
DeparmentRouter.put('/:id', Deparment.update)
