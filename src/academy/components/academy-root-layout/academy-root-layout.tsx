import { Stack } from 'expo-router'

export function AcademyRootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          animation: 'fade',
          title: 'Choisissez votre mage et commencez à jouer',
        }}
      />
    </Stack>
  )
}
