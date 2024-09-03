import { Router } from 'express'
import { CollectInfoController } from '../controllers/collect_info'


export const CollectInfoRouter = Router()

CollectInfoRouter.get('/object', CollectInfoController.getInfo)
CollectInfoRouter.get('/build', CollectInfoController.getInfo)
CollectInfoRouter.get('/make_backup', CollectInfoController.MakeBackup)
CollectInfoRouter.get('/search_folder', CollectInfoController.MakeBackup)
CollectInfoRouter.post('/read_dir', CollectInfoController.readDir)
CollectInfoRouter.post('/read_video', CollectInfoController.readMetadata)
