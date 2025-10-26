import { t as i18nextT } from 'i18next'
import type { Paths } from 'type-fest'
import type { messagesEn } from './messages.en'
import type { messagesFr } from './messages.fr'

export type AvailableLocale = 'fr' | 'en'

export type Translations = Record<AvailableLocale, Record<string, unknown>>

export type TranslationPath = Paths<typeof messagesEn, { leavesOnly: true }> &
  Paths<typeof messagesFr, { leavesOnly: true }>

export function translate<T extends TranslationPath>(
  key: T,
  values?: Record<string, unknown>,
) {
  return i18nextT(key, values)
}

export const t = translate
