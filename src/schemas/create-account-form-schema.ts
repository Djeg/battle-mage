import z from 'zod'
import { emailSchema, passwordSchema } from './atom-schemas'

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
