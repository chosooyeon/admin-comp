// src/lib/providers.tsx
'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1분
      gcTime: 5 * 60 * 1000, // 5분
    },
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

// 사용 예시
// src/hooks/useData.ts
import { useQuery } from '@tanstack/react-query'

export function useData() {
  return useQuery({
    queryKey: ['data'],
    queryFn: async () => {
      const res = await fetch('/api/data')
      return res.json()
    },
  })
}