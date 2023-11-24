import { createContext, useContext } from 'react'

export interface Context {
  country: string | undefined
}

const Context = createContext<Context>({
  country: undefined,
})

export function useSession() {
  return useContext(Context)
}

export default function SessionContext({
  children,
  data,
}: {
  children: JSX.Element
  data: {
    country: string | undefined
  }
}) {
  const context = {
    country: data.country,
  }

  return <Context.Provider value={context}>{children}</Context.Provider>
}
