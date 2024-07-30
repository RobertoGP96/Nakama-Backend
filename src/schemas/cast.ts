import { object, number, string } from 'zod'

export const CastSchema = object({
  name: string({
    invalid_type_error: 'Rating must be a string.',
    required_error: 'Rating is required'
  }),
  original_name: string({
    invalid_type_error: 'Original Name must be a string.',
    required_error: 'Character is required'
  }),
  character: string({
    invalid_type_error: 'Character must be a string.',
    required_error: 'Character is required'
  }),
  creditsId: number(
    {
      invalid_type_error: 'Credits_id must be a number.',
      required_error: 'Credits_id is required'
    }
  ),
  department: string({
    invalid_type_error: 'Department must be string.',
    required_error: 'Department is required.'
  })
})
