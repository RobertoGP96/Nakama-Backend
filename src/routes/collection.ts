import { Router } from 'express'

import { CollectionController } from '../controllers/collection'

export const CollectionRouter = Router()

CollectionRouter.get('/', CollectionController.getAll)
CollectionRouter.get('/:id', CollectionController.getByID)
CollectionRouter.post('/', CollectionController.create)

CollectionRouter.delete('/:id', CollectionController.delete)
CollectionRouter.put('/:id', CollectionController.update)
