import { messagesEn } from '@/common/libs/translations/messages.en'
import { messagesFr } from '@/common/libs/translations/messages.fr'
import type { AvailableLocale } from '@/common/libs/translations/translations'
import { useEffectOnce } from '@legendapp/state/react'
import { default as i18nextLib } from 'i18next'
import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  useEffect,
  useState,
} from 'react'

const DEFAULT_LOCALE =
  (process.env.EXPO_PUBLIC_DEFAULT_LOCALE as AvailableLocale) ?? 'fr'

export type I18Next = {
  locale: AvailableLocale
}

export const I18NextContext = createContext<I18Next>({
  locale: DEFAULT_LOCALE,
})

function identity<T>(value: T): T {
  return value
}

export const SetI18NextContext =
  createContext<Dispatch<SetStateAction<I18Next>>>(identity)

export type I18NextProviderProps = PropsWithChildren<{
  locale?: AvailableLocale
}>

export function I18NextProvider({
  children,
  locale = DEFAULT_LOCALE,
}: I18NextProviderProps) {
  const [i18next, setI18next] = useState<I18Next>({ locale })

  useEffectOnce(() => {
    i18nextLib.init({
      lng: i18next.locale,
      fallbackLng: DEFAULT_LOCALE,
      resources: {
        fr: {
          translation: messagesFr,
        },
        en: {
          translation: messagesEn,
        },
      },
    })
  }, [])

  useEffect(() => {
    i18nextLib.changeLanguage(i18next.locale)
  }, [i18next.locale])

  return (
    <I18NextContext.Provider value={i18next}>
      <SetI18NextContext.Provider value={setI18next}>
        {children}
      </SetI18NextContext.Provider>
    </I18NextContext.Provider>
  )
}
