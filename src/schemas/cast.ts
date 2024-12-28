import { object, number, string } from 'zod'

export const CastSchema = object({
  name: string({
    invalid_type_error: 'Name must be a string.',
    required_error: 'Name is required'
  }),
  originalName: string({
    invalid_type_error: 'Original Name must be a string.'
  }),
  character: string({
    invalid_type_error: 'Character must be a string.',
  }),
  department: string({
    invalid_type_error: 'Department must be string.',
    required_error: 'Department is required.',
  })
}).partial()
export function validateCast(input) {
  return CastSchema.safeParse(input)
}