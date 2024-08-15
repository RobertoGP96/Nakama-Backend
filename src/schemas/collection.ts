import z from 'zod'

export const CollectionSchema = z.object({
    title: z.string({
        invalid_type_error:"Title must be a string",
    }),
    description: z.string({
        invalid_type_error:"Description must be a string",
    }),
    content: z.number({
        invalid_type_error: "Conetent must be a number array"
    }).array(),
    
}).partial()

export function validateCollection(input) {
    return CollectionSchema.safeParse(input)
}