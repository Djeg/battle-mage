import {
  type NewMageFormInput,
  newMageFormSchema,
} from '@/academy/schemas/new-mage-form-schema'
import type { SupabaseClient } from '@/common/components/supabase-provider/supabase-provider'

export type CreateNewMagePayload = {
  client: SupabaseClient
  userId: string
  input: NewMageFormInput
}

export async function createNewMage({
  client,
  userId,
  input,
}: CreateNewMagePayload) {
  const newMage = newMageFormSchema.parse(input)

  return client.from('mages').insert({ name: newMage.name, created_by: userId })
}
