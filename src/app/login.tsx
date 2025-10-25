import { useSupabase } from '@/common/components/app-provider/app-provider'
import { FormErrors } from '@/common/components/form-errors/form-errors'
import { FormField } from '@/common/components/form-field/form-field'
import { loginFormSchema } from '@/schemas/login-form-schema'
import { Memo, useObservable } from '@legendapp/state/react'
import { useForm } from '@tanstack/react-form'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Heading, Input, Text, View, YStack } from 'tamagui'

export default function Login() {
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
    <SafeAreaView style={{ flex: 1 }}>
      <View flex={1} paddingHorizontal={12} justifyContent="center">
        <YStack gap={6} paddingBottom={12}>
          <Heading textAlign="center">Connexion</Heading>
          <Text textAlign="center" color="gray">
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
      </View>
    </SafeAreaView>
  )
}
