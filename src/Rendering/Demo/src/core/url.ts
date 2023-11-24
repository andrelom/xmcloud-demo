export function getURLPath(value: string | null | undefined, lowercase: boolean = true) {
  if (!value) return ''

  try {
    const url = new URL(value)
    const pathname = lowercase ? url.pathname.toLowerCase() : url.pathname
    const path = url.search ? `${pathname}?${url.search}` : pathname

    return path
  } catch {
    return ''
  }
}

export function createURL(
  pathname: string,
  options?: {
    origin?: string
    search?: Record<string, any>
  },
): URL {
  let origin = options?.origin

  if (!origin) {
    if (typeof window === 'undefined') {
      origin = process.env.NEXT_BASE_URL
    } else {
      origin = process.env.NEXT_PUBLIC_BASE_URL
    }
  }

  const url = new URL(pathname, origin)
  const search = options?.search ?? {}

  for (const [key, value] of Object.entries(search)) {
    url.searchParams.append(key, value)
  }

  return url
}
