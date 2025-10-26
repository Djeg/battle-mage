import { Stack } from 'expo-router'

export default function MageMakerLayout() {
  return (
    <Stack>
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
