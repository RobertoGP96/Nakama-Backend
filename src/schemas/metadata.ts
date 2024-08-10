import z from 'zod'

export const MetadataSchema = z.object({
    storage: z.number({
        invalid_type_error: 'storage must be a number'
    }),
    duration: z.number({
        invalid_type_error: 'storage must be a number'
    }),
    fps: z.number({
        invalid_type_error: 'storage must be a number'
    }),
    resolution: z.string({
        invalid_type_error: 'storage must be a String'
    }),
    codec: z.string({
        invalid_type_error: 'Codec must be a String'
    }),
    audio: z.string({
        invalid_type_error: 'Audio must be a String'
    }),
    subt: z.string({
        invalid_type_error: 'Subtitle must be a String'
    })
})