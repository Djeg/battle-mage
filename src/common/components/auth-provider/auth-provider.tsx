import { useSupabase } from '@/common/hooks/use-supabase/use-supabase'
import { useEffectOnce } from '@legendapp/state/react'
import { createContext, type PropsWithChildren, useState } from 'react'
import type { Promisable } from 'type-fest'

export type User = {
  id: string
}

export enum AuthState {
  NO_SET = 'NO_SET',
  LOGGED_IN = 'LOGGED_IN',
  LOGGED_OUT = 'LOGGED_OUT',
}

export type Auth = {
  user: User | undefined
  state: AuthState
}

export const AuthContext = createContext<Auth>({
  user: undefined,
  state: AuthState.NO_SET,
})

export type AuthProviderProps = PropsWithChildren<{
  onLoggedIn?: (user: User) => Promisable<void>
  onLoggedOut?: () => Promisable<void>
}>

export function AuthProvider({
  children,
  onLoggedIn,
  onLoggedOut,
}: AuthProviderProps) {
  const supabaseClient = useSupabase()
  const [auth, setAuth] = useState<Auth>({
    user: undefined,
    state: AuthState.NO_SET,
  })

  useEffectOnce(() => {
    const { data } = supabaseClient.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        setAuth({ user: undefined, state: AuthState.LOGGED_OUT })

        onLoggedOut?.()

        return
      }

      const user = session?.user as User

      setAuth({
        user,
        state: AuthState.LOGGED_IN,
      })

      onLoggedIn?.(user)

      return
    })

    return () => {
      data.subscription.unsubscribe()
    }
  }, [supabaseClient, onLoggedIn, onLoggedOut])

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
