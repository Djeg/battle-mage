import { useSupabase } from '@/common/hooks/use-supabase/use-supabase'
import { useUser } from '@/common/hooks/use-user/use-user'
import { fetchMage } from '@/mundus/libs/fetch-mage/fetch-mage'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'

export function useMageQuery() {
  const { mageId } = useLocalSearchParams<{ mageId: string }>()
  const supabaseClient = useSupabase()
  const user = useUser()

  const { data } = useSuspenseQuery({
    queryKey: mageQueryKey(mageId),
    queryFn: () =>
      fetchMage({ client: supabaseClient, userId: user.id, mageId }),
  })

  return data
}

export function mageQueryKey(id: string) {
  return ['mage', id]
}
