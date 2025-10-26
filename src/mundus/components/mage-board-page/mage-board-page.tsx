import { PageLayout } from '@/common/components/page-layout/page-layout'
import { t } from '@/common/libs/translations/translations'
import { Heading } from 'tamagui'

export function MageBoardPage() {
  return (
    <PageLayout.Vertical>
      <Heading textAlign="center">{t('mundus.mageBoardPage.title')}</Heading>
    </PageLayout.Vertical>
  )
}
