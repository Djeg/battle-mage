import { useEffectOnce } from '@legendapp/state/react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient, type User } from '@supabase/supabase-js'
import { defaultConfig } from '@tamagui/config/v4'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { router } from 'expo-router'
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react'
import { createTamagui, TamaguiProvider } from 'tamagui'

export type AppProviderProps = PropsWithChildren

export function AppProvider({ children }: AppProviderProps) {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <QueryClientProvider client={tanstackQueryClient}>
        <SupabaseProvider>
          <AuthProvider>{children}</AuthProvider>
        </SupabaseProvider>
      </QueryClientProvider>
    </TamaguiProvider>
  )
}

// configure tamagui

export const tamaguiConfig = createTamagui({
  ...defaultConfig,
})

// configure tanstack query

export const tanstackQueryClient = new QueryClient()

// configure supabase

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

export function useSupabase() {
  const client = useContext(SupabaseContext)

  if (!client) {
    throw new Error(
      'useSupabase must be used within a SupabaseProvider. You forgot to wrap your app in <AppProvider>?',
    )
  }

  return client
}

// Authentication provider

export const AuthUserContext = createContext<User | undefined>(undefined)

export function AuthProvider({ children }: PropsWithChildren) {
  const supabaseClient = useSupabase()
  const [user, setUser] = useState<User | undefined>(undefined)

  useEffectOnce(() => {
    const { data } = supabaseClient.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        setUser(session?.user ?? undefined)

        router.push('/mage-maker')
      } else if (event === 'SIGNED_OUT') {
        setUser(undefined)

        router.push('/')
      }
    })

    return () => {
      data.subscription.unsubscribe()
    }
  }, [])

  return (
    <AuthUserContext.Provider value={user}>{children}</AuthUserContext.Provider>
  )
}

export function useUser() {
  const user = useContext(AuthUserContext)

  return user
}
