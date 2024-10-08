import z from 'zod'
import { CastSchema } from './cast'


export const GenreSchema = z.object({
    genres: CastSchema.required().array()
})
export function validateGenre(input) {
    return GenreSchema.safeParse(input)
}