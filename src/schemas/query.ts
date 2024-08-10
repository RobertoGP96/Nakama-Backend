import z, { number } from 'zod'

export const QuerySchema = z.object({
    elements: z.number({
        invalid_type_error: "Elements must be a number array",
        required_error: "Elements is required"
    }).array(),

    state: z.string({
        invalid_type_error: "State must be a string"
    }),

    description: z.string({
        invalid_type_error: "Description must be a string"
    })
})