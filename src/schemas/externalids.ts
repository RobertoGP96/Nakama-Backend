import z from 'zod'

export const ExternalIdsSchema = z.object({
  imdb_id: z.string({
    invalid_type_error: 'Imdb must be a string.',
    required_error: 'Imdb is required'
  }),
  tmdb_id: z.string({
    invalid_type_error: 'Tmdb must be a string.',
    required_error: 'Imdb is required'
  }),
  omdb_id: z.string({
    invalid_type_error: 'Omdb must be a string.'
  })
})

