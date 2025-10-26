import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type PropsWithChildren, useMemo } from 'react'

export type TanstackQueryProviderProps = PropsWithChildren

export function TanstackQueryProvider({
  children,
}: TanstackQueryProviderProps) {
  const client = useMemo(() => createTanstackQueryClient(), [])

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export function createTanstackQueryClient() {
  return new QueryClient()
}
