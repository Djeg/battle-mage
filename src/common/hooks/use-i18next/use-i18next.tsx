import { I18NextContext } from '@/common/components/i18next-provider/i18next-provider'
import { useContext } from 'react'

export function useI18Next() {
  return useContext(I18NextContext)
}
