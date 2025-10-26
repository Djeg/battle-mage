import { AuthProvider } from '@/common/components/auth-provider/auth-provider'
import { SupabaseProvider } from '@/common/components/supabase-provider/supabase-provider'
import { TamaguiProvider } from '@/common/components/tamagui-provider/tamagui-provider'
import { TanstackQueryProvider } from '@/common/components/tanstack-query-provider/tanstack-query-provider'
import { useOnLoggedIn } from '@/common/hooks/use-on-logged-in/use-on-logged-in'
import { useOnLoggedOut } from '@/common/hooks/use-on-logged-out/use-on-logged-out'
import type { PropsWithChildren } from 'react'
import { I18NextProvider } from '../i18next-provider/i18next-provider'

export type AppProviderProps = PropsWithChildren

export function AppProvider({ children }: AppProviderProps) {
  const onLoggedIn = useOnLoggedIn()
  const onLoggedOut = useOnLoggedOut()

  return (
    <I18NextProvider>
      <TamaguiProvider>
        <TanstackQueryProvider>
          <SupabaseProvider>
            <AuthProvider onLoggedIn={onLoggedIn} onLoggedOut={onLoggedOut}>
              {children}
            </AuthProvider>
          </SupabaseProvider>
        </TanstackQueryProvider>
      </TamaguiProvider>
    </I18NextProvider>
  )
}
