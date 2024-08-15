import { createCast } from "./cast"

interface Credits{
    id: number | null
    elementId: number
    cast_members: Cast[]
}
interface createCredits {
    cast_members: createCast[]
}