import { emailSchema } from '@/schemas/email-schema'
import { passwordSchema } from '@/schemas/password-schema'
import z from 'zod'

export const loginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})
