import z, { string } from 'zod'


export const GenreSchema = z.object({
    genres: z.string().array()
})
export function validateGenre(input) {
    return GenreSchema.safeParse(input)
}