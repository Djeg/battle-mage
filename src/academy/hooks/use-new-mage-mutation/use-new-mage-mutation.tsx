import { createNewMage } from '@/academy/libs/create-new-mage/create-new-mage'
import type { NewMageInput } from '@/academy/schemas/new-mage-schema'
import { useSupabase } from '@/common/hooks/use-supabase/use-supabase'
import { useUser } from '@/common/hooks/use-user/use-user'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { magesQueryKey } from '../use-mages-query/use-mages-query'

export function useNewMageMutation() {
  const queryClient = useQueryClient()
  const supabaseClient = useSupabase()
  const user = useUser()

  return useMutation({
    mutationFn: (input: NewMageInput) =>
      createNewMage({ client: supabaseClient, userId: user.id, input }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: magesQueryKey() })
    },
  })
}
