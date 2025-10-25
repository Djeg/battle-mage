import { YStack } from 'tamagui'
import { FormErrors } from '../form-errors/form-errors'

export type FormFieldProps = {
  children: React.ReactNode
  errors?: string[]
}

export function FormField({ children, errors }: FormFieldProps) {
  return (
    <YStack gap={2}>
      {children}
      <FormErrors errors={errors ?? []} />
    </YStack>
  )
}
