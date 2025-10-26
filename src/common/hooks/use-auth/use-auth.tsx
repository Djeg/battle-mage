import { AuthContext } from '@/common/components/auth-provider/auth-provider'
import { useContext } from 'react'

export function useAuth() {
  const auth = useContext(AuthContext)

  if (!auth) {
    throw new Error(`
      useAuth must be used within a AuthProvider.

      Here are some clues to help you fix the issue:
      
      ➡️ You forgot to wrap your app in <AppProvider>?
      ➡️ You forgot to wrap your app in <AuthProvider>?
      ➡️ Check the <AppProvider> component to see if everything is correctly wrapped.
      ➡️ Check the <AuthProvider> component to see if there is any issue?
    `)
  }
  return auth
}
