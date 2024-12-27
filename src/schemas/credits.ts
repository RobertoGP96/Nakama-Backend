import z from 'zod'
import { CastSchema } from './cast'

export const CreditsSchema = z.object({
  cast_members: CastSchema.required().array()
}).partial()
export function validateCredits(input) {
  return CreditsSchema.safeParse(input)
}