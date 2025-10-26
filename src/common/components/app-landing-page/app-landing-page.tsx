import { PageLayout } from '@/common/components/page-layout/page-layout'
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
          <Heading textAlign="center">Battle Mage</Heading>
          <Text textAlign="center" color="gray">
            Affrontez des mages en ligne et devenez la légende de
            l&apos;Aetherium
          </Text>
        </YStack>
        <XStack alignItems="center" gap={12} justifyContent="center">
          <Button onPress={handleLogin}>Connexion</Button>
          <Button onPress={handleCreateAccount}>Inscription</Button>
        </XStack>
      </PageLayout.Centered>
    </PageLayout>
  )
}
