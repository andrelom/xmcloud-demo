//
// NodeJS

declare namespace NodeJS {
  interface ProcessEnv {
    // Node
    readonly NODE_ENV: 'development' | 'production' | 'test'
    // Next.js
    readonly PUBLIC_URL: string
    readonly SSG_REVALIDATE_SECONDS: string
  }
}
