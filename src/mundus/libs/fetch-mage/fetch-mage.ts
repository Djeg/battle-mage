import { mageSchema } from '@/common/schemas/mage-schema'
import type { SupabaseClient } from '@supabase/supabase-js'

export type FetchMagePayload = {
  client: SupabaseClient
  userId: string
  mageId: string
}

export async function fetchMage({ client, userId, mageId }: FetchMagePayload) {
  const { data } = await client
    .from('mages')
    .select('id, name')
    .eq('created_by', userId)
    .eq('id', mageId)
    .single()

  return mageSchema.parse(data)
}
