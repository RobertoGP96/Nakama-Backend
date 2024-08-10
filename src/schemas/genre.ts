import z from 'zod'
import { CastSchema } from './cast'


export const GenreSchema = z.object({
    genres: CastSchema.required().array()
})