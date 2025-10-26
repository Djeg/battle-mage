import type { PropsWithChildren } from 'react'
import { type Edge, SafeAreaView } from 'react-native-safe-area-context'
import { styled, View } from 'tamagui'

export type PageLayoutProps = PropsWithChildren<{
  edges?: Edge[]
}>

export function PageLayout({ children, edges }: PageLayoutProps) {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={edges}>
      {children}
    </SafeAreaView>
  )
}

const Centered = styled(View, {
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: 24,
})

PageLayout.Centered = Centered
