import type { Mage } from '@/academy/schemas/mage-schema'
import { t } from '@/common/libs/translations/translations'
import { router } from 'expo-router'
import { Button, Card, Heading } from 'tamagui'

export type MageCardProps = {
  mage: Mage
}

export function MageCard({ mage }: MageCardProps) {
  const handleSelect = () => {
    router.push(`/mundus/${mage.id}/mage-board`)
  }

  const handleRemove = () => {}

  return (
    <Card bordered>
      <Card.Header>
        <Heading fontWeight="bold">{mage.name}</Heading>
      </Card.Header>
      <Card.Footer padding={6} justifyContent="space-between" gap={6}>
        <Button
          onPress={handleSelect}
          fontWeight="bold"
          backgroundColor="green"
          color="white"
          flexGrow={1}
        >
          {t('academy.mageCard.selectButton')}
        </Button>
        <Button
          onPress={handleRemove}
          backgroundColor="red"
          color="white"
          fontWeight="bold"
        >
          {t('academy.mageCard.removeButton')}
        </Button>
      </Card.Footer>
    </Card>
  )
}
