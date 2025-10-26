import { useI18Next } from '../use-i18next/use-i18next'

export function useCurrentLocale() {
  const { locale } = useI18Next()

  return locale
}
