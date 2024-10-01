import z from 'zod'

export const ResourceSchema = z.object({
    addres: z.string({
        invalid_type_error: "Addres must be a string",
        required_error: "Addres is required"
    }),
    type: z.string({
        invalid_type_error: "Type must be a string",
    }) ,
    device: z.string({
        invalid_type_error: "Device must be a string",
        
    }),
}).partial()


export function validateResource(input) {
    return ResourceSchema.safeParse(input)
}