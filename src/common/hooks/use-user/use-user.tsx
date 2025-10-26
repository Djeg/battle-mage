import { useAuth } from '@/common/hooks/use-auth/use-auth'

export function useUser() {
  const auth = useAuth()

  if (!auth.user) {
    throw new Error(`
      There is no user in the Auth.

      Here are some clues to help you fix the issue:

      ➡️ If you are not logged in, you cannot use this hook.
         Login first to use this hook.
      ➡️ You can use the useAuth hook to check if you are logged in.
    `)
  }

  return auth.user
}
