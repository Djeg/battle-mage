import { AppProvider } from '@/common/components/app-provider/app-provider'
import { useAuth } from '@/common/hooks/use-auth/use-auth'
import { Stack } from 'expo-router'
import { AuthState } from '../auth-provider/auth-provider'

export function AppRootLayout() {
  return (
    <AppProvider>
      <Navigator />
    </AppProvider>
  )
}

function Navigator() {
  const auth = useAuth()

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ animation: 'fade' }} />
      <Stack.Screen
        name="(account)/login"
        options={{ animation: 'slide_from_left' }}
      />
      <Stack.Screen
        name="(account)/create-account"
        options={{ animation: 'slide_from_right' }}
      />
      <Stack.Protected guard={auth.state === AuthState.LOGGED_IN}>
        <Stack.Screen name="academy" options={{ animation: 'fade' }} />
      </Stack.Protected>
    </Stack>
  )
}
