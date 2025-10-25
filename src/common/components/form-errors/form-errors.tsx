import { Text, YStack } from 'tamagui'

export type FormErrorsProps = {
  errors: string[]
}

export function FormErrors({ errors }: FormErrorsProps) {
  return (
    <YStack gap={2} padding={4}>
      {errors.map(error => (
        <Text color="red" key={error}>
          ❌ {error}
        </Text>
      ))}
    </YStack>
  )
}
