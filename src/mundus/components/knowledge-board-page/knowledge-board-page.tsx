import { PageLayout } from '@/common/components/page-layout/page-layout'
import { t } from '@/common/libs/translations/translations'
import { Heading } from 'tamagui'

export function KnowledgeBoardPage() {
  return (
    <PageLayout.Vertical>
      <Heading textAlign="center">
        {t('mundus.knowledgeBoardPage.title')}
      </Heading>
    </PageLayout.Vertical>
  )
}
