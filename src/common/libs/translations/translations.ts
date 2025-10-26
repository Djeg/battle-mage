import type { MessagesKey } from '@/translations/messages'
import { t as i18nextT } from 'i18next'

export type AvailableLocale = 'fr' | 'en'

export function translate<T extends MessagesKey>(
  key: T,
  values?: Record<string, unknown>,
) {
  return i18nextT(key, values)
}

export const t = translate
