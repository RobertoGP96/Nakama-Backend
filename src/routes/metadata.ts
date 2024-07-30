import { Router } from 'express'

import { Metadata } from '../controllers/metadata'

export const MetadataRouter = Router()

MetadataRouter.get('/', Metadata.getAll)
MetadataRouter.get('/:id', Metadata.getByID)
MetadataRouter.post('/:id', Metadata.create)

MetadataRouter.delete('/:id', Metadata.delete)
MetadataRouter.put('/:id', Metadata.update)
