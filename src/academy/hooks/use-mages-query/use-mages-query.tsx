import { fetchMages } from '@/academy/libs/fetch-mages/fetch-mages'
import { useSupabase } from '@/common/hooks/use-supabase/use-supabase'
import { useUser } from '@/common/hooks/use-user/use-user'
import { useSuspenseQuery } from '@tanstack/react-query'

export function useMagesQuery() {
  const supabaseClient = useSupabase()
  const user = useUser()

  const { data } = useSuspenseQuery({
    queryKey: magesQueryKey(),
    queryFn: () => fetchMages({ client: supabaseClient, userId: user.id }),
  })

  return data
}

export function magesQueryKey() {
  return ['mages']
}
