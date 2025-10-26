import { emailSchema } from '@/schemas/email-schema'
import { passwordSchema } from '@/schemas/password-schema'
import z from 'zod'

export const createAccountFormSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    repeatPassword: passwordSchema,
  })
  .refine(data => data.password === data.repeatPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['repeatPassword'],
  })
