import z from 'zod'

export const UserSchema = z.object({
    username: z.string(),
    lastname: z.string(),
    nickname: z.string(),
    password: z.string() ,
    email: z.string(),
    phone: z.string(),
    role: z.string()
}).partial()


export function validateUser(input) {
    return UserSchema.safeParse(input)
}