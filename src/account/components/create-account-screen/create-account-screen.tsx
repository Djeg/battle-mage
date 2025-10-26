import { createAccountFormSchema } from '@/account/schemas/create-account-form-schema'
import { FormErrors } from '@/common/components/form-errors/form-errors'
import { FormField } from '@/common/components/form-field/form-field'
import { PageLayout } from '@/common/components/page-layout/page-layout'
import { useSupabase } from '@/common/hooks/use-supabase/use-supabase'
import { t } from '@/common/libs/translations/translations'
import { Memo, useObservable } from '@legendapp/state/react'
import { useForm } from '@tanstack/react-form'
import { Link } from 'expo-router'
import { Button, Heading, Input, Text, YStack } from 'tamagui'

export function CreateAccountScreen() {
  const supabaseClient = useSupabase()
  const submissionErrors = useObservable<string[]>([])
  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validators: {
      onSubmit: createAccountFormSchema,
    },
    onSubmit: async ({ value: { email, password } }) => {
      const { error } = await supabaseClient.auth.signUp({
        email,
        password,
      })

      if (error) {
        submissionErrors.set([
          error.message ?? t('account.createAccountScreen.submissionError'),
        ])
      }
    },
  })

  return (
    <PageLayout>
      <PageLayout.Centered>
        <YStack gap={6} paddingBottom={12}>
          <Heading textAlign="center">
            {t('account.createAccountScreen.title')}
          </Heading>
          <Text textAlign="center" color="gray">
            {t('account.createAccountScreen.description')}
          </Text>
        </YStack>
        <YStack gap={12}>
          <Memo>{() => <FormErrors errors={submissionErrors.get()} />}</Memo>
          <Field name="email">
            {field => (
              <FormField
                errors={field.state.meta.errors?.map(
                  error => error?.message ?? '',
                )}
              >
                <Input
                  placeholder={t(
                    'account.createAccountScreen.emailPlaceholder',
                  )}
                  value={field.state.value}
                  onChangeText={field.handleChange}
                  autoCapitalize="none"
                />
              </FormField>
            )}
          </Field>
          <Field name="password">
            {field => (
              <FormField
                errors={field.state.meta.errors?.map(
                  error => error?.message ?? '',
                )}
              >
                <Input
                  placeholder={t(
                    'account.createAccountScreen.passwordPlaceholder',
                  )}
                  value={field.state.value}
                  onChangeText={field.handleChange}
                  autoCapitalize="none"
                  secureTextEntry
                />
              </FormField>
            )}
          </Field>

          <Field name="repeatPassword">
            {field => (
              <FormField
                errors={field.state.meta.errors?.map(
                  error => error?.message ?? '',
                )}
              >
                <Input
                  placeholder={t(
                    'account.createAccountScreen.repeatPasswordPlaceholder',
                  )}
                  value={field.state.value}
                  onChangeText={field.handleChange}
                  autoCapitalize="none"
                  secureTextEntry
                />
              </FormField>
            )}
          </Field>
          <Subscribe>
            {({ isSubmitting, isValid }) => (
              <Button
                onPress={handleSubmit}
                disabled={isSubmitting || !isValid}
              >
                {isSubmitting
                  ? t('account.createAccountScreen.submitButtonLoading')
                  : t('account.createAccountScreen.submitButton')}
              </Button>
            )}
          </Subscribe>
          <Text textAlign="center" color="gray">
            {t('account.createAccountScreen.alreadyHaveAccount')}&nbsp;
            <Text asChild color="blue">
              <Link href="/login">
                {t('account.createAccountScreen.login')}
              </Link>
            </Text>
          </Text>
        </YStack>
      </PageLayout.Centered>
    </PageLayout>
  )
}
