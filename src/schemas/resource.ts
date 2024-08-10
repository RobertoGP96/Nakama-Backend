import z from 'zod'

export const ResourceSchema = z.object({
    addres: z.string({
        invalid_type_error: "Addres must be a string",
        required_error: "Addres is required"
    }),
    type: z.string({
        invalid_type_error: "Type must be a string",
    }) ,
    e_found: z.number({
        invalid_type_error: "E_Found must be a string",
        
    }),
    e_pending: z.number({
        invalid_type_error: "E_pend must be a string",
    }),
    e_ids: z.number({
        invalid_type_error: "E_ids must be a number array",
    }).array()
})


export function validateResource(input) {
    return ResourceSchema.safeParse(input)
}