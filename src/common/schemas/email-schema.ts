import { t } from '@/common/libs/translations/translations'
import z from 'zod'

export const emailSchema = z.email({
  message: t('common.schemas.email.invalid'),
})
