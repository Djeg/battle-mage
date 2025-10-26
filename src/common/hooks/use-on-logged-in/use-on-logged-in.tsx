import { router } from 'expo-router'

export function useOnLoggedIn() {
  return () => {
    router.push('/academy')
  }
}
