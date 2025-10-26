import { PageLayout } from '@/common/components/page-layout/page-layout'
import { t } from '@/common/libs/translations/translations'
import { useMageQuery } from '@/mundus/hooks/use-mage-query/use-mage-query'
import { Card, Heading, ScrollView, Text } from 'tamagui'

export function MageBoardPage() {
  const mage = useMageQuery()

  return (
    <PageLayout.Vertical>
      <Heading textAlign="center">{t('mundus.mageBoardPage.title')}</Heading>
      <ScrollView flex={1} paddingTop={6}>
        <Card padding={12} bordered>
          <Card.Header>
            <Text fontWeight="bold">
              {t('mundus.mageBoardPage.information')}
            </Text>
            <Text>
              {t('mundus.mageBoardPage.mageName', { name: mage.name })}
            </Text>
          </Card.Header>
        </Card>
      </ScrollView>
    </PageLayout.Vertical>
  )
}
