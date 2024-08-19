import { object, number, string, z } from 'zod'
import { UserSchema } from './user'

export const registerSchema = object({
    username: z.string(),
    lastname: z.string(),
    nickname: z.string(),
    password: z.string(),
    email: z.string(),
    phone: z.string(),
})

export function validateRegister(input) {
    return registerSchema.safeParse(input)
  }

export const loginSchema = object({
  email: z.string(),
    password: z.string()
})

export function validateLogin(input) {
    return loginSchema.safeParse(input)
  }

