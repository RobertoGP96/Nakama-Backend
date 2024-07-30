import z from 'zod'

export const ExternalIdsSchema = z.object({
  external_id: z.string({
    invalid_type_error: 'Rating must be a number.',
    required_error: 'Rating is required'
  }),
  votes: z.number({
    invalid_type_error: 'Votes must be a number.',
    required_error: 'Votes is required'
  }),
  elementId: z.number({
    invalid_type_error: 'Element_id must be a number.',
    required_error: 'Element_id is required'
  })
})

export const Ids = z.object({
  external_id: z.string({
    invalid_type_error: 'Rating must be a number.',
    required_error: 'Rating is required'
  })
})

enum companyName {
  IMDB,
  OMDB,
  RottemTomatoes,
}
