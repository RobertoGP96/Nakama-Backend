import { Router } from 'express'
import { TmdbController } from '../controllers/tmdb'


export const TmdbRouter = Router()

TmdbRouter.get('/details/:type/:id', TmdbController.getDetails)
TmdbRouter.get('/bigq/:type/:id', TmdbController.bigQueryES)
TmdbRouter.get('/credits/:type/:id', TmdbController.Credits)
TmdbRouter.get('/images/:type/:id', TmdbController.getImages)
TmdbRouter.get('/external_ids/:type/:id', TmdbController.getExternalIds)
TmdbRouter.get('/search/:type/:search', TmdbController.Search)