import { AppProvider } from '@/common/components/app-provider/app-provider'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ animation: 'fade' }} />
        <Stack.Screen
          name="sign-in"
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="create-account"
          options={{ animation: 'slide_from_left' }}
        />
      </Stack>
    </AppProvider>
  )
}
