import http from '@/core/http'
import { createURL } from '@/core/url'

export async function signIn(username: string | null | undefined) {
  const url = createURL('/api/signin')

  const data = { username }

  return http.post(url, data)
}
