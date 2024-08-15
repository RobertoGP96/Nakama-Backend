import { Router } from 'express'

import { UserController } from '../controllers/user'

export const UserRouter = Router()

UserRouter.get('/', UserController.getAll)
UserRouter.get('/:id', UserController.getByID)
UserRouter.post('/', UserController.create)

UserRouter.delete('/:id', UserController.delete)
UserRouter.put('/:id', UserController.update)