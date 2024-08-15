import express from 'express'

import { NakamaElementRouter } from './routes/NakamaElement'
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

const app = express()
const port = 3000

app.use(express.json());

app.disable('x-powered-by')

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.use('/elements', NakamaElementRouter)
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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
