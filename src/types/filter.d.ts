import { categoryName, genreName } from "@prisma/client"

type Filter = {
    title: string,
    year: [ min: number, max: number],
    category: categoryName[],
    genre: genreName[],
    country: string,
}