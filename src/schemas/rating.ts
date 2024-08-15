import { object, number } from 'zod'

export const RatingSchema = object({
  imdb_rating: number({
    invalid_type_error: 'Rating must be a number.',
    required_error: 'Rating is required'
  }),
  imdb_votes: number({
    invalid_type_error: 'Votes must be a number.',
    required_error: 'Votes is required'
  }),
  rotten_rating: number({
    invalid_type_error: 'Rating must be a number.',
    required_error: 'Rating is required'
  }),
  rotten_votes: number({
    invalid_type_error: 'Votes must be a number.',
    required_error: 'Votes is required'
  }),
  mc_rating: number({
    invalid_type_error: 'Rating must be a number.',
    required_error: 'Rating is required'
  }),
  mc_votes: number({
    invalid_type_error: 'Votes must be a number.',
    required_error: 'Votes is required'
  }),
}).partial()
export function validateRating(input) {
  return RatingSchema.safeParse(input)
}