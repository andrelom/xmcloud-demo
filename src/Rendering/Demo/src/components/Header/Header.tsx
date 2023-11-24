import { useMemo } from 'react'
import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs'
import { signIn } from './api'
import { useSession } from '@/components/SessionContext'

export type HeaderProps = any & {
  data: {
    id: string
    title: { value: string }
  }
}

const Header = ({ data }: HeaderProps): JSX.Element => {
  const session = useSession()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const input = prompt('What is your Username?')
    const username = input?.trim()

    if (!username) {
      alert('Invalid Username!')

      return
    }

    signIn(username).then((result) => {
      if (!result.ok) {
        alert('Whoops!')
      } else {
        window.location.reload()
      }
    })
  }

  const identity = useMemo(() => {
    if (!session.username || session.username === 'anonymous') {
      return (
        <button className="nav-link fw-bold py-1 px-0 active" onClick={handleClick}>
          Sign In
        </button>
      )
    }

    return <div>{session.username}</div>
  }, [session.username])

  return (
    <header className="mb-auto">
      <div>
        <h3 className="float-md-start mb-0">{data?.title?.value}</h3>
        <nav className="nav nav-masthead justify-content-center float-md-end">{identity}</nav>
      </div>
    </header>
  )
}

export default withDatasourceCheck()<HeaderProps>(Header)
