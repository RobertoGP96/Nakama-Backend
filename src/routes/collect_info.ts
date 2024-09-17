/**
 * File: /d:/Dev/React Works/Nakama-Backend/Nakama-Backend/src/routes/collect_info.ts
 * 
 * This file contains the routes for collecting information.
 */
import { Router } from 'express'
import { CollectInfoController } from '../controllers/collect_info'


export const CollectInfoRouter = Router()

CollectInfoRouter.get('/object', CollectInfoController.getInfo)
CollectInfoRouter.get('/build', CollectInfoController.getInfo)
CollectInfoRouter.get('/make_backup', CollectInfoController.MakeBackup)
CollectInfoRouter.get('/search_folder', CollectInfoController.MakeBackup)
CollectInfoRouter.post('/read_dir', CollectInfoController.readDir)
CollectInfoRouter.post('/read_video', CollectInfoController.readMetadata)
//CollectInfoRouter.post('/read_old', CollectInfoController.read_test)

