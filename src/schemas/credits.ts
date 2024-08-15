import z from 'zod'
import { CastSchema } from './cast'

export const CreditsSchema = z.object({
  elemetnId: z.number({
    invalid_type_error: 'Element_id must be a number.',
    required_error: 'Element_id is required'
  }),
  cast_members: CastSchema.required().array()
}).partial()
export function validateCredits(input) {
  return CreditsSchema.safeParse(input)
}