import type { NextRequest, NextFetchEvent } from 'next/server'

import { NextResponse } from 'next/server'
import middleware from 'lib/middleware'

const isHTMLDocument = (req: NextRequest): boolean => {
  return req.headers.get('accept')?.toLowerCase().includes('text/html') ?? false
}

export const rewrite = (req: NextRequest) => {
  const url = req.nextUrl.clone()
  const cookie = req.cookies.get('next.session.user')
  const country = req.geo?.country?.toLowerCase() ?? 'global'
  const username = cookie?.value ?? 'anonymous'

  let pathname = ''

  pathname += `/${country}`
  pathname += `/${username}`
  pathname += `/${url.pathname}`

  url.pathname = pathname.replace(/\/+/gi, '/')

  console.log('1. >>>>>>>>>> Middleware - GEO Country:', country)
  console.log('2. >>>>>>>>>> Middleware - Original URL Pathname:', req.nextUrl.pathname)
  console.log('3. >>>>>>>>>> Middleware - Rewritten URL Pathname:', url.pathname)

  // Enable per-session caching for "getStaticProps".
  return NextResponse.rewrite(url)
}

// Match all paths except for:
// 1. API Routes: "/api";
// 2. Next.js Internals: "/_next";
// 3. Sitecore API Routes: "/sitecore/api";
// 4. Sitecore Media: "/-";
// 5. Health Check: "/healthz";
export const config = {
  matcher: ['/', '/((?!api/|_next/|sitecore/api/|-/|healthz).*)'],
}

export default async function handler(req: NextRequest, event: NextFetchEvent) {
  const res = await middleware(req, event)

  if (isHTMLDocument(req)) {
    return rewrite(req)
  }

  return res
}
