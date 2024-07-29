import { object, string } from 'zod'
export const RatingSchema = object({
  id: string()
})
