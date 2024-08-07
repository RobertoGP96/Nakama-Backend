import { genreName } from "@prisma/client"

interface GenreC{
    id: number
    element_id: number
    genres: genreName[]
}

