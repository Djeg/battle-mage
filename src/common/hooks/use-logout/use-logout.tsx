import { useSupabase } from '../use-supabase/use-supabase'

export function useLogout() {
  const supabaseClient = useSupabase()

  return () => {
    supabaseClient.auth.signOut()
  }
}
