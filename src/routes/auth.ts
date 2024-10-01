import { Router } from 'express'

import { AuthController } from '../controllers/auth'
import { AuthMiddleware } from '../middlewares/auth'

export const AuthRouter = Router()

AuthRouter.post('/register', AuthController.register)
AuthRouter.post('/login', AuthController.login)
AuthRouter.get('/logout', AuthController.logout)

AuthRouter.use(AuthMiddleware.verifyAcces)
AuthRouter.get('/protected', AuthController.protected)
