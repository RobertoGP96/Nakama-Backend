import z from 'zod'

export const MilistSchema = z.object({
    elements: z.number({
        invalid_type_error: "Elements must be a number array",
        required_error: "Elements is required"
    }).array(),
    userId: z.string({
        invalid_type_error:"User id must be a string",
        required_error:"User id is required"
    })
}).partial()
export function validateMilist(input) {
    return MilistSchema.safeParse(input)
}