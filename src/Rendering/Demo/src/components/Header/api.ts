import http from '@/core/http'
import { createURL } from '@/core/url'

export async function signIn(username: string | null | undefined) {
  const url = createURL('/api/auth/signin')

  const data = { username }

  return http.post(url, data)
}

export async function signOut() {
  const url = createURL('/api/auth/signout')

  const data = {}

  return http.post(url, data)
}
