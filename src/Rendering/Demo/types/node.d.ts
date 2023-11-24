//
// NodeJS

declare namespace NodeJS {
  interface ProcessEnv {
    // Node
    readonly NODE_ENV: 'development' | 'production' | 'test'
    // Next.js
    readonly PUBLIC_URL: string
    readonly NEXT_REVALIDATE: string
    readonly NEXT_REVALIDATE_SECRET: string
    // NextAuth
    readonly NEXTAUTH_URL: string
    readonly NEXTAUTH_URL_INTERNAL: string
    readonly NEXTAUTH_SECRET: string
  }
}
