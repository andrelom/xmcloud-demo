import { DefaultSession, DefaultUser } from 'next-auth'

//
// NextAuth

interface IUser extends DefaultUser {}

declare module 'next-auth' {
  interface User extends IUser {}

  interface Session {
    user?: User
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends IUser {}
}
