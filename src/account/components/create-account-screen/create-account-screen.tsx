import { createAccountFormSchema } from '@/account/schemas/create-account-form-schema'
import { FormErrors } from '@/common/components/form-errors/form-errors'
import { FormField } from '@/common/components/form-field/form-field'
import { PageLayout } from '@/common/components/page-layout/page-layout'
import { useSupabase } from '@/common/hooks/use-supabase/use-supabase'
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
          error.message ??
            'Une erreur est survenue lors de la création du compte, veuillez réessayer plus tard',
        ])
      }
    },
  })

  return (
    <PageLayout>
      <PageLayout.Centered>
        <YStack gap={6} paddingBottom={12}>
          <Heading textAlign="center">Créez votre compte</Heading>
          <Text textAlign="center" color="gray">
            Créez votre compte afin de pouvoir commencer à jouer
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
                  placeholder="Email"
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
                  placeholder="Mot de passe"
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
                  placeholder="Répétez votre mot de passe"
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
                  ? 'Nous créons votre compte...'
                  : 'Créer votre compte'}
              </Button>
            )}
          </Subscribe>
          <Text textAlign="center" color="gray">
            Vous avez déjà un compte ?&nbsp;
            <Text asChild color="blue">
              <Link href="/login">Connéctez-vous</Link>
            </Text>
          </Text>
        </YStack>
      </PageLayout.Centered>
    </PageLayout>
  )
}
