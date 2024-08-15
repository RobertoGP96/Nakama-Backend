import { Router } from 'express'

import { MetadataController } from '../controllers/metadata'

export const MetadataRouter = Router()

MetadataRouter.get('/', MetadataController.getAll)
MetadataRouter.get('/:id', MetadataController.getByID)
