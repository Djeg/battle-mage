import { PageLayout } from '@/common/components/page-layout/page-layout'
import { t } from '@/common/libs/translations/translations'
import { router } from 'expo-router'
import { Button, Heading, Text, XStack, YStack } from 'tamagui'

export function AppLandingPage() {
  const handleLogin = () => {
    router.push('/login')
  }

  const handleCreateAccount = () => {
    router.push('/create-account')
  }

  return (
    <PageLayout>
      <PageLayout.Centered>
        <YStack gap={6} paddingBottom={12}>
          <Heading textAlign="center">
            {t('common.appLandingPage.title')}
          </Heading>
          <Text textAlign="center" color="gray">
            {t('common.appLandingPage.description')}
          </Text>
        </YStack>
        <XStack alignItems="center" gap={12} justifyContent="center">
          <Button onPress={handleLogin}>
            {t('common.appLandingPage.goToLogin')}
          </Button>
          <Button onPress={handleCreateAccount}>
            {t('common.appLandingPage.goToCreateAccount')}
          </Button>
        </XStack>
      </PageLayout.Centered>
    </PageLayout>
  )
}
