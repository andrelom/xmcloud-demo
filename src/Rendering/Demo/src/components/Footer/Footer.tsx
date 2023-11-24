import { withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs'

export type FooterProps = any & {
  data: {
    id: string
    copyright: { value: string }
  }
}

const Footer = ({ data }: FooterProps): JSX.Element => {
  return (
    <footer className="mt-auto text-white-50">
      <p>{data?.copyright?.value}</p>
    </footer>
  )
}

export default withDatasourceCheck()<FooterProps>(Footer)
