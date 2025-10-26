import { fetchMages } from '@/academy/libs/fetch-mages/fetch-mages'
import { PageLayout } from '@/common/components/page-layout/page-layout'
import { useSupabase } from '@/common/hooks/use-supabase/use-supabase'
import { useUser } from '@/common/hooks/use-user/use-user'
import { t } from '@/common/libs/translations/translations'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Button, Card, Heading, Text, YStack } from 'tamagui'

export function AcademyHomePage() {
  return (
    <PageLayout>
      <PageLayout.Suspense>
        <PageLayout.ErrorBoundary>
          <PageLayout.Centered>
            <AcademyHomePageContent />
          </PageLayout.Centered>
        </PageLayout.ErrorBoundary>
      </PageLayout.Suspense>
    </PageLayout>
  )
}

function AcademyHomePageContent() {
  const supabaseClient = useSupabase()
  const user = useUser()
  const { data: mages } = useSuspenseQuery({
    queryKey: ['mages'],
    queryFn: fetchMages({ client: supabaseClient, userId: user.id }),
  })

  const handleCreateMage = () => {
    console.warn('create mage')
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
        <YStack>
          {mages.map(mage => (
            <Card key={mage.id}>
              <Text>{mage.name}</Text>
            </Card>
          ))}
        </YStack>
      )}
    </PageLayout.Vertical>
  )
}
