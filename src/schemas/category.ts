import { object, number } from 'zod'

export const CategorySchema = object({
  rating: number({
    invalid_type_error: 'Rating must be a number.',
    required_error: 'Rating is required'
  }),
  votes: number({
    invalid_type_error: 'Votes must be a number.',
    required_error: 'Votes is required'
  }),
  elementId: number(
    {
      invalid_type_error: 'Element_id must be a number.',
      required_error: 'Element_id is required'
    }
  )
})
