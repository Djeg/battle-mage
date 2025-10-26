import FontAwesome from '@expo/vector-icons/FontAwesome'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import { Link, useLocalSearchParams } from 'expo-router'
import { View, XStack } from 'tamagui'

export function MundusTabBar() {
  const { mageId } = useLocalSearchParams<{ mageId: string }>()

  return (
    <View borderTopWidth={1} borderTopColor="grey">
      <XStack justifyContent="center" paddingTop={6} gap={12}>
        <Link href={`/mundus/${mageId}/mage-board`}>
          <View padding={2}>
            <FontAwesome5 name="user-graduate" size={34} color="black" />
          </View>
        </Link>
        <Link href={`/mundus/${mageId}/spell-board`}>
          <View padding={2}>
            <FontAwesome6 name="wand-sparkles" size={34} color="black" />
          </View>
        </Link>
        <Link href={`/mundus/${mageId}/knowledge-board`}>
          <View padding={2}>
            <FontAwesome6 name="book" size={34} color="black" />
          </View>
        </Link>
        <Link href={`/mundus/${mageId}/parameters`}>
          <View padding={2}>
            <FontAwesome name="gear" size={34} color="black" />
          </View>
        </Link>
      </XStack>
    </View>
  )
}
