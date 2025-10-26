import { useNewMageMutation } from '@/academy/hooks/use-new-mage-mutation/use-new-mage-mutation'
import { newMageSchema } from '@/academy/schemas/new-mage-schema'
import { FormErrors } from '@/common/components/form-errors/form-errors'
import { FormField } from '@/common/components/form-field/form-field'
import { PageLayout } from '@/common/components/page-layout/page-layout'
import { t } from '@/common/libs/translations/translations'
import { Memo, useObservable } from '@legendapp/state/react'
import { useForm } from '@tanstack/react-form'
import { router } from 'expo-router'
import { Button, Heading, Input, YStack } from 'tamagui'

export function AcademyCreateMagePage() {
  const newMageMutation = useNewMageMutation()
  const submissionErrors = useObservable<string[]>([])
  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      name: '',
    },
    validators: {
      onSubmit: newMageSchema,
    },
    onSubmit: async ({ value }) => {
      const { error } = await newMageMutation.mutateAsync(value)

      if (error) {
        submissionErrors.set([
          error.message ?? t('academy.academyCreateMagePage.submissionError'),
        ])

        return
      }

      router.push('/academy')
    },
  })

  return (
    <PageLayout.Vertical>
      <Heading textAlign="center">
        {t('academy.academyCreateMagePage.title')}
      </Heading>
      <YStack gap={6}>
        <Memo>{() => <FormErrors errors={submissionErrors.get()} />}</Memo>
        <Field name="name">
          {field => (
            <FormField
              errors={field.state.meta.errors?.map(
                error => error?.message ?? '',
              )}
            >
              <Input
                value={field.state.value}
                onChangeText={field.handleChange}
                placeholder={t('academy.academyCreateMagePage.namePlaceholder')}
                autoCapitalize="none"
              />
            </FormField>
          )}
        </Field>
        <Subscribe>
          {({ isSubmitting, isValid }) => (
            <Button onPress={handleSubmit} disabled={isSubmitting || !isValid}>
              {isSubmitting
                ? t('academy.academyCreateMagePage.submitButtonLoading')
                : t('academy.academyCreateMagePage.submitButton')}
            </Button>
          )}
        </Subscribe>
      </YStack>
    </PageLayout.Vertical>
  )
}
