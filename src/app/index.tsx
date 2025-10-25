import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Heading, Text, View, XStack, YStack } from 'tamagui'

export default function Index() {
  const handleLogin = () => {
    router.push('/login')
  }

  const handleCreateAccount = () => {
    router.push('/create-account')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        flex={1}
        justifyContent="center"
        alignItems="center"
        paddingHorizontal={12}
      >
        <YStack gap={6} paddingBottom={12}>
          <Heading textAlign="center">Battle Mage</Heading>
          <Text textAlign="center" color="gray">
            Affrontez des mages en ligne et devenez la légende de
            l&apos;Aetherium
          </Text>
        </YStack>
        <XStack>
          <Button onPress={handleLogin}>Connexion</Button>
          <Button onPress={handleCreateAccount}>Inscription</Button>
        </XStack>
      </View>
    </SafeAreaView>
  )
}
