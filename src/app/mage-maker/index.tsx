import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, View } from 'tamagui'

export default function MageMakerIndex() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View flex={1} paddingHorizontal={12} justifyContent="center">
        <Text textAlign="center">Pending work...</Text>
      </View>
    </SafeAreaView>
  )
}
