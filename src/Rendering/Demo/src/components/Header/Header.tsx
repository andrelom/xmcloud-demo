import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs'

export type HeaderProps = any & {
  data: {
    id: string
    title: { value: string }
  }
}

const Header = ({ data }: HeaderProps): JSX.Element => {
  return (
    <header className="mb-auto">
      <div>
        <h3 className="float-md-start mb-0">{data?.title?.value}</h3>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="/">
            Home
          </a>
        </nav>
      </div>
    </header>
  )
}

export default withDatasourceCheck()<HeaderProps>(Header)
