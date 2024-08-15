import { genreName } from "@prisma/client"

interface Genre{
    id: number
    elementId: number
    genres: genreName[]
}
type createGenre = Omit<Genre, 'id' | 'elementId'>
