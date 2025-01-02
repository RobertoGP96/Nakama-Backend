import { Router } from 'express'

import { ElementController } from '../controllers/element'

export const ElementRouter = Router()

ElementRouter.get('/', ElementController.getAll)
ElementRouter.get('/search/:id', ElementController.getByID)
ElementRouter.post('/create', ElementController.create)
ElementRouter.post('/create/s', ElementController.createSimple)

ElementRouter.delete('/delete/:id', ElementController.delete)
ElementRouter.put('/edit/:id', ElementController.update)
