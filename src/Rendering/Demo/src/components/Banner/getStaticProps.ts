import type { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs'

const getStaticProps: GetStaticComponentProps = async () => {
  const date = new Date()

  return {
    timestamp: date.toUTCString(),
  }
}

export default getStaticProps
