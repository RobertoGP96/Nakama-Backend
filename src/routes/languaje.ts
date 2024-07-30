import { Router } from 'express'

import { Languaje } from '../controllers/languaje'

export const LanguajeRouter = Router()

LanguajeRouter.get('/', Languaje.getAll)
LanguajeRouter.get('/:id', Languaje.getByID)
LanguajeRouter.post('/:id', Languaje.create)

LanguajeRouter.delete('/:id', Languaje.delete)
LanguajeRouter.put('/:id', Languaje.update)
