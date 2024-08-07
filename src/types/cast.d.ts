import { Department } from "@prisma/client"

interface Cast {
    id: null | number
    name: string
    originalName: string
    character: string
    deparment: Department
    credits_id: number
}
