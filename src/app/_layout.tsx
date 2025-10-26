import {
  AppProvider,
  useUser,
} from '@/common/components/app-provider/app-provider'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <AppProvider>
      <Navigator />
    </AppProvider>
  )
}

function Navigator() {
  const user = useUser()

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ animation: 'fade' }} />
      <Stack.Screen name="login" options={{ animation: 'slide_from_left' }} />
      <Stack.Screen
        name="create-account"
        options={{ animation: 'slide_from_right' }}
      />
    </Stack>
  )
}
