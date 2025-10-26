import { t } from '@/common/libs/translations/translations'
import { emailSchema } from '@/common/schemas/email-schema'
import { passwordSchema } from '@/common/schemas/password-schema'
import z from 'zod'

export const createAccountFormSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    repeatPassword: passwordSchema,
  })
  .refine(data => data.password === data.repeatPassword, {
    message: t('account.schemas.createAccountForm.repeatPassword.mismatch'),
    path: ['repeatPassword'],
  })
