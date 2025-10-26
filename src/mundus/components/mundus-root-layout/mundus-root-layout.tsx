import { PageLayout } from '@/common/components/page-layout/page-layout'
import { Tabs } from 'expo-router'
import { MundusTabBar } from '../mundus-tab-bar/mundus-tab-bar'

export function MundusRootLayout() {
  return (
    <PageLayout>
      <PageLayout.Suspense>
        <PageLayout.ErrorBoundary>
          <Tabs
            tabBar={() => <MundusTabBar />}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Tabs.Screen name="mage-board" />
            <Tabs.Screen name="spell-board" />
            <Tabs.Screen name="parameters" />
          </Tabs>
        </PageLayout.ErrorBoundary>
      </PageLayout.Suspense>
    </PageLayout>
  )
}
