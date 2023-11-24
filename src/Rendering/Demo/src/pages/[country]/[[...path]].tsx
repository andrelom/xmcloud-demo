import type { GetStaticProps } from 'next'

import getStaticPaths from '@/root/getStaticPaths'
import Root from '@/root/Root'

export { getStaticPaths }

export const getStaticProps: GetStaticProps = async (context) => {
  const getStaticProps = await import('@/root/getStaticProps')

  return Object.assign(await getStaticProps.default(context), {
    revalidate: 60,
  })
}

export default Root
