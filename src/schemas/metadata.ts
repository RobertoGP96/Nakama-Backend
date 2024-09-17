import z from 'zod'

export const MetadataSchema = z.object({
    path: z.number({
        invalid_type_error: 'path must be a number'
    }),
    storage: z.number({
        invalid_type_error: 'storage must be a number'
    }),
    duration: z.number({
        invalid_type_error: 'Duration must be a number'
    }),
    fps: z.number({
        invalid_type_error: 'fps must be a number'
    }),
    resolution: z.string({
        invalid_type_error: 'Resolution must be a String'
    }),
    codec: z.string({
        invalid_type_error: 'Codec must be a String'
    }),
    audio: z.string({
        invalid_type_error: 'Audio must be a String'
    }),
    subtitle: z.string({
        invalid_type_error: 'Subtitle must be a String'
    })
}).partial()
export function validateMetadata(input) {
    return MetadataSchema.safeParse(input)
}