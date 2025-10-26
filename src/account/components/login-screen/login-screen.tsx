import { loginFormSchema } from '@/account/schemas/login-form-schema'
import { FormErrors } from '@/common/components/form-errors/form-errors'
import { FormField } from '@/common/components/form-field/form-field'
import { PageLayout } from '@/common/components/page-layout/page-layout'
import { useSupabase } from '@/common/hooks/use-supabase/use-supabase'
import { Memo, useObservable } from '@legendapp/state/react'
import { useForm } from '@tanstack/react-form'
import { Link } from 'expo-router'
import { Button, Heading, Input, Text, YStack } from 'tamagui'

export function LoginScreen() {
  const supabaseClient = useSupabase()
  const submissionErrors = useObservable<string[]>([])
  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onSubmit: loginFormSchema,
    },
    onSubmit: async ({ value: { email, password } }) => {
      const { error } = await supabaseClient.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        submissionErrors.set([
          error.message ??
            'Une erreur est survenue lors de la connexion, veuillez réessayer plus tard',
        ])
      }
    },
  })

  return (
    <PageLayout>
      <PageLayout.Centered>
        <YStack gap={6} paddingBottom={12}>
          <Heading textAlign="center">Connexion</Heading>
          <Text textAlign="center" color="gray" flexWrap="wrap">
            Connectez-vous pour commencer à jouer
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
          <Subscribe>
            {({ isSubmitting, isValid }) => (
              <Button
                onPress={handleSubmit}
                disabled={isSubmitting || !isValid}
              >
                {isSubmitting ? 'En cours de connexion...' : 'Connexion'}
              </Button>
            )}
          </Subscribe>
          <Text textAlign="center" color="gray">
            Vous n&apos;avez pas de compte ?&nbsp;
            <Text asChild color="blue">
              <Link href="/create-account">Créez-en un</Link>
            </Text>
          </Text>
        </YStack>
      </PageLayout.Centered>
    </PageLayout>
  )
}
