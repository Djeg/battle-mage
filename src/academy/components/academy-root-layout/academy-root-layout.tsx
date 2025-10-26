import { PageLayout } from '@/common/components/page-layout/page-layout'
import { Stack } from 'expo-router'

export function AcademyRootLayout() {
  return (
    <PageLayout>
      <PageLayout.Suspense>
        <PageLayout.ErrorBoundary>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen
              name="create-mage"
              options={{ animation: 'slide_from_right' }}
            />
          </Stack>
        </PageLayout.ErrorBoundary>
      </PageLayout.Suspense>
    </PageLayout>
  )
}
