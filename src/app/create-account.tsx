import { useSupabase } from '@/common/components/app-provider/app-provider'
import { FormErrors } from '@/common/components/form-errors/form-errors'
import { FormField } from '@/common/components/form-field/form-field'
import { createAccountFormSchema } from '@/schemas/create-account-form-schema'
import { Memo, useObservable } from '@legendapp/state/react'
import { useForm } from '@tanstack/react-form'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Heading, Input, Text, View, YStack } from 'tamagui'

export default function CreateAccount() {
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
    <SafeAreaView style={{ flex: 1 }}>
      <View flex={1} paddingHorizontal={12} justifyContent="center">
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
      </View>
    </SafeAreaView>
  )
}
