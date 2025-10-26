import {
  type NewMageInput,
  newMageSchema,
} from '@/academy/schemas/new-mage-schema'
import type { SupabaseClient } from '@/common/components/supabase-provider/supabase-provider'

export type CreateNewMagePayload = {
  client: SupabaseClient
  userId: string
  input: NewMageInput
}

export async function createNewMage({
  client,
  userId,
  input,
}: CreateNewMagePayload) {
  const newMage = newMageSchema.parse(input)

  return client.from('mages').insert({ name: newMage.name, created_by: userId })
}
