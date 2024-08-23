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

const app = express()

app.use(express.json());
app.disable('x-powered-by')

//app.use(AuthMiddleware.verifyAcces)

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
app.use('/users', UserRouter)
app.use('/auth', AuthRouter)
app.use('/api_key', ApiKeyRouter)

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.SERVER_PORT}`)
})
