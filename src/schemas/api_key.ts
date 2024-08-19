import { object, number, string, z } from 'zod'

export const ApiKeySchema = object({
    name: z.string(),
    status: z.boolean(),
    token: z.string()
}).partial()

export function validateApiKey(input) {
    return ApiKeySchema.safeParse(input)
}

