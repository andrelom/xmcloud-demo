import type { GetStaticPaths } from 'next'

const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export default getStaticPaths
