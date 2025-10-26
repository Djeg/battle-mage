import { SupabaseContext } from '@/common/components/supabase-provider/supabase-provider'
import { useContext } from 'react'

export function useSupabase() {
  const supabase = useContext(SupabaseContext)

  if (!supabase) {
    throw new Error(`
      useSupabase must be used within a SupabaseProvider.

      Here are some clues to help you fix the issue:
      
      ➡️ You forgot to wrap your app in <AppProvider>?
      ➡️ You forgot to wrap your app in <SupabaseProvider>?
      ➡️ Check the <AppProvider> component to see if everything is correctly wrapped.
      ➡️ Check the <SupabaseProvider> component to see if there is any issue?
    `)
  }

  return supabase
}
