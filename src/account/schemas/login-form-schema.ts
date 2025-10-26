import { emailSchema } from '@/common/schemas/email-schema'
import { passwordSchema } from '@/common/schemas/password-schema'
import z from 'zod'

export const loginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})
