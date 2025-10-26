import { t } from '@/common/libs/translations/translations'
import type { Mage } from '@/common/schemas/mage-schema'
import { Button, Card, Heading } from 'tamagui'

export type MageCardProps = {
  mage: Mage
  onSelect: () => void
  onRemove: () => void
}

export function MageCard({ mage, onSelect, onRemove }: MageCardProps) {
  return (
    <Card bordered>
      <Card.Header>
        <Heading fontWeight="bold">{mage.name}</Heading>
      </Card.Header>
      <Card.Footer padding={6} justifyContent="space-between" gap={6}>
        <Button
          onPress={onSelect}
          fontWeight="bold"
          backgroundColor="green"
          color="white"
          flexGrow={1}
        >
          {t('academy.mageCard.selectButton')}
        </Button>
        <Button
          onPress={onRemove}
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
