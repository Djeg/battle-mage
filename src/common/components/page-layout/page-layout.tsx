import { t } from '@/common/libs/translations/translations'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { type PropsWithChildren, Suspense as ReactSuspense } from 'react'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'
import { ActivityIndicator } from 'react-native'
import { type Edge, SafeAreaView } from 'react-native-safe-area-context'
import { Button, Heading, styled, Text, View, YStack } from 'tamagui'

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

PageLayout.Vertical = styled(View, {
  flex: 1,
  paddingHorizontal: 24,
})

PageLayout.Centered = styled(View, {
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: 24,
})

export type PageLayoutSuspenseProps = PropsWithChildren<{
  fallback?: React.ReactNode
}>

PageLayout.Suspense = function Suspense({
  children,
  fallback = <DefaultSuspenceFallback />,
}: PageLayoutSuspenseProps) {
  return <ReactSuspense fallback={fallback}>{children}</ReactSuspense>
}

function DefaultSuspenceFallback() {
  return (
    <PageLayout.Centered>
      <ActivityIndicator size="large" />
    </PageLayout.Centered>
  )
}

export type PageLayoutErrorBoundaryProps = PropsWithChildren<{
  renderFallback?: (reset: () => void) => React.ReactNode
}>

PageLayout.ErrorBoundary = function ErrorBoundary({
  children,
  renderFallback,
}: PageLayoutErrorBoundaryProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ReactErrorBoundary
          onReset={reset}
          fallback={
            renderFallback?.(reset) ?? (
              <DefaultErrorBoundaryFallback reset={reset} />
            )
          }
        >
          {children}
        </ReactErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

type ErrorBoundaryFallbackProps = {
  reset: () => void
}

function DefaultErrorBoundaryFallback({ reset }: ErrorBoundaryFallbackProps) {
  return (
    <PageLayout.Centered>
      <YStack gap={6}>
        <Heading textAlign="center">
          {t('common.pageLayout.errorBoundary.title')}
        </Heading>
        <Text color="gray" textAlign="center" flexWrap="wrap">
          {t('common.pageLayout.errorBoundary.description')}
        </Text>
        <Button onPress={reset}>
          {t('common.pageLayout.errorBoundary.reset')}
        </Button>
      </YStack>
    </PageLayout.Centered>
  )
}
