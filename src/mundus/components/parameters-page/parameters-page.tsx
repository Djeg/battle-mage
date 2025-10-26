import { PageLayout } from '@/common/components/page-layout/page-layout'
import { useLogout } from '@/common/hooks/use-logout/use-logout'
import { t } from '@/common/libs/translations/translations'
import { router } from 'expo-router'
import { Button, Heading, YStack } from 'tamagui'

export function ParametersPage() {
  const logout = useLogout()

  const handleAcademy = () => {
    router.push('/academy')
  }

  return (
    <PageLayout.Vertical>
      <Heading textAlign="center">{t('mundus.parametersPage.title')}</Heading>

      <YStack gap={6}>
        <Button onPress={handleAcademy}>
          {t('mundus.parametersPage.academyButton')}
        </Button>
        <Button onPress={logout}>
          {t('mundus.parametersPage.logoutButton')}
        </Button>
      </YStack>
    </PageLayout.Vertical>
  )
}
