import { SetI18NextContext } from '@/common/components/i18next-provider/i18next-provider'
import { useContext } from 'react'

export function useSetCurrentLocale() {
  return useContext(SetI18NextContext)
}
