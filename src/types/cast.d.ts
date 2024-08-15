import { Department } from "@prisma/client"

interface Cast {
    id: null | number
    name: string
    originalName: string
    character: string
    department: Department
    credits_id: number
}

type createCast = Omit<Cast, 'id'| 'credits_id'>