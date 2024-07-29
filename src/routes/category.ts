import { Router } from 'express'

import { Category } from '../controllers/category.js'

export const CategoryRouter = Router()

NakamaElementRouter.get('/', Category.getAll)
NakamaElementRouter.get('/:id', Category.getByID)
NakamaElementRouter.post('/:id', Category.create)

NakamaElementRouter.delete('/:id', Category.delete)
NakamaElementRouter.put('/:id', Category.update)
