import { defaultConfig } from '@tamagui/config/v4'
import { type PropsWithChildren, useMemo } from 'react'
import { createTamagui, TamaguiProvider as TamaguiProviderBase } from 'tamagui'

export type TamaguiProviderProps = PropsWithChildren

export function TamaguiProvider({ children }: TamaguiProviderProps) {
  const config = useMemo(() => createTamaguiConfig(), [])

  return <TamaguiProviderBase config={config}>{children}</TamaguiProviderBase>
}

export function createTamaguiConfig() {
  return createTamagui({
    ...defaultConfig,
  })
}
