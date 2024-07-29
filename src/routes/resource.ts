import { Router } from 'express'

import { Resource } from '../controllers/resource.js'

export const ResourceRouter = Router()

ResourceRouter.get('/', Resource.getAll)
ResourceRouter.get('/:id', Resource.getByID)
ResourceRouter.post('/:id', Resource.create)

ResourceRouter.delete('/:id', Resource.delete)
ResourceRouter.put('/:id', Resource.update)
