import { router } from 'expo-router'

export function useOnLoggedOut() {
  return () => {
    router.push('/')
  }
}
