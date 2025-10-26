import { useMagesQuery } from '@/academy/hooks/use-mages-query/use-mages-query'
import { PageLayout } from '@/common/components/page-layout/page-layout'
import { useLogout } from '@/common/hooks/use-logout/use-logout'
import { t } from '@/common/libs/translations/translations'
import type { Mage } from '@/common/schemas/mage-schema'
import { router } from 'expo-router'
import { Button, Heading, ScrollView, Text, View, YStack } from 'tamagui'
import { MageCard } from '../mage-card/mage-card'

export function AcademyHomePage() {
  const mages = useMagesQuery()
  const logout = useLogout()

  const handleCreateMage = () => {
    router.push('/academy/create-mage')
  }

  const handleSelectMage = (mage: Mage) => () => {
    router.push(`/mundus/${mage.id}/mage-board`)
  }

  const handleRemoveMage = (mage: Mage) => () => {
    console.log('remove mage', mage)
  }

  return (
    <PageLayout.Vertical>
      <Heading textAlign="center">{t('academy.academyHomePage.title')}</Heading>

      {mages.length === 0 ? (
        <PageLayout.Centered>
          <YStack gap={12}>
            <Text textAlign="center">
              {t('academy.academyHomePage.emptyMageList')}
            </Text>
            <Button onPress={handleCreateMage}>
              {t('academy.academyHomePage.createMageButton')}
            </Button>
          </YStack>
        </PageLayout.Centered>
      ) : (
        <View flex={1}>
          <ScrollView flexGrow={1}>
            <YStack gap={12}>
              {mages.map(mage => (
                <MageCard
                  key={mage.id}
                  mage={mage}
                  onSelect={handleSelectMage(mage)}
                  onRemove={handleRemoveMage(mage)}
                />
              ))}
            </YStack>
          </ScrollView>
          <YStack gap={6}>
            <Button onPress={handleCreateMage}>
              {t('academy.academyHomePage.createMageButton')}
            </Button>
            <Button onPress={logout}>
              {t('academy.academyHomePage.logoutButton')}
            </Button>
          </YStack>
        </View>
      )}
    </PageLayout.Vertical>
  )
}
