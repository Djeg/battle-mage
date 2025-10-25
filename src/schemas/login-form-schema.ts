import z from 'zod'
import { emailSchema, passwordSchema } from './atom-schemas'

export const loginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})
