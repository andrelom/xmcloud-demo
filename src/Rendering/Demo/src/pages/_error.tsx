import { NextPage } from 'next'
import Head from 'next/head'

interface ErrorPageProps {
  statusCode?: number | null | undefined
}

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => (
  <>
    <Head>
      <title>Error</title>
    </Head>
    <div style={{ padding: 10 }}>
      <h1>An error occurred</h1>
      <p>{statusCode ? `A server-side ${statusCode} error occurred.` : 'A client-side error occurred.'}</p>
      <a href="/">Go to the Home page</a>
    </div>
  </>
)

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404

  return { statusCode }
}

export default ErrorPage
