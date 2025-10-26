import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { createContext, type PropsWithChildren, useMemo } from 'react'

export type SupabaseClient = ReturnType<typeof createClient>

export const SupabaseContext = createContext<
  ReturnType<typeof createClient> | undefined
>(undefined)

export type SupabaseProviderProps = PropsWithChildren<{
  url?: string
  key?: string
}>

export function SupabaseProvider({
  children,
  url = process.env.EXPO_PUBLIC_SUPABASE_URL,
  key = process.env.EXPO_PUBLIC_SUPABASE_KEY,
}: SupabaseProviderProps) {
  const client = useMemo<SupabaseClient>(
    () =>
      createClient(url!, key!, {
        auth: {
          storage: AsyncStorage,
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: false,
        },
      }),
    [url, key],
  )

  return (
    <SupabaseContext.Provider value={client}>
      {children}
    </SupabaseContext.Provider>
  )
}
