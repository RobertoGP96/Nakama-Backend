import express from 'express'

import { ElementRouter } from './routes/element'
import { CastRouter } from './routes/cast'
import { MetadataRouter } from './routes/metadata'
import { MiListRouter } from './routes/milist'
import { QueryRouter } from './routes/query'
import { RatingRouter } from './routes/rating'
import { ResourceRouter } from './routes/resource'
import { GenreRouter } from './routes/genre'
import { CreditsRouter } from './routes/credits'
import { UserRouter } from './routes/user'
import { CollectionRouter } from './routes/collection'
import { AuthRouter } from './routes/auth'


import { AuthMiddleware } from "./middlewares/auth"
import { ApiKeyRouter } from './routes/api_key'

import { TmdbRouter } from './routes/tmdb'
import { OmdbRouter } from './routes/omdb'
import { CollectInfoRouter } from './routes/collect_info'
import { PreSaveRouter } from './routes/pre_save'

const app = express()

app.use(express.json());
app.disable('x-powered-by')

app.use(AuthMiddleware.verifyApiKEyToken)
//Data
app.use('/elements', ElementRouter)
app.use('/cast', CastRouter)
app.use('/collections', CollectionRouter)
app.use('/metadata', MetadataRouter)
app.use('/milist', MiListRouter)
app.use('/query', QueryRouter)
app.use('/rating', RatingRouter)
app.use('/resource', ResourceRouter)
app.use('/genre', GenreRouter)
app.use('/credits', CreditsRouter)
app.use('/pre_save', PreSaveRouter)

app.use('/users', UserRouter)

app.use('/auth', AuthRouter)

//API KEY Access
app.use('/api_key', ApiKeyRouter)

//Services
app.use('/tmdb', TmdbRouter)
app.use('/omdb', OmdbRouter)

//Collect info from json backup file
app.use('/collect_info', CollectInfoRouter)

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.SERVER_PORT}`)
})
