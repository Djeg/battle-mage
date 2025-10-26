import { mageSchema } from '@/academy/schemas/mage-schema'
import type { SupabaseClient } from '@/common/components/supabase-provider/supabase-provider'

export type FetchMagesPayload = {
  client: SupabaseClient
  userId: string
}

export async function fetchMages({ client, userId }: FetchMagesPayload) {
  const { data } = await client
    .from('mages')
    .select('id, name')
    .eq('created_by', userId)
    .order('created_at', { ascending: false })

  return (data ?? []).map(mage => mageSchema.parse(mage))
}
