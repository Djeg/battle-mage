import { t } from '@/common/libs/translations/translations'
import z from 'zod'

export const passwordSchema = z
  .string()
  .min(8, {
    message: t('common.schemas.password.minLength'),
  })
  .regex(/[A-Z0-9@$!%*?&]/, {
    message: t('common.schemas.password.specialCharacters'),
  })
