//
// NodeJS

declare namespace NodeJS {
  interface ProcessEnv {
    // Node
    readonly NODE_ENV: 'development' | 'production' | 'test'
    // Next.js
    readonly PUBLIC_URL: string
    readonly NEXT_REVALIDATE: string
  }
}
