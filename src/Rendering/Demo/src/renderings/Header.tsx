import type { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs'

import Header from '@/components/Header'

export const getStaticProps: GetStaticComponentProps = async (rendering, layout, context) => {
  return import('@/components/Banner/getStaticProps').then((getStaticProps) => {
    return getStaticProps.default(rendering, layout, context)
  })
}

export default Header
