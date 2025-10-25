import { defaultConfig } from '@tamagui/config/v4'
import type { PropsWithChildren } from 'react'
import { createTamagui, TamaguiProvider } from 'tamagui'

export const tamaguiConfig = createTamagui({
  ...defaultConfig,
})

export type AppProviderProps = PropsWithChildren

export function AppProvider({ children }: AppProviderProps) {
  return <TamaguiProvider config={tamaguiConfig}>{children}</TamaguiProvider>
}
