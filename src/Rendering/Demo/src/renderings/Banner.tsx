import type { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs'

import Banner from '@/components/Banner'

export const getStaticProps: GetStaticComponentProps = async (rendering, layout, context) => {
  return import('@/components/Banner/getStaticProps').then((getStaticProps) => {
    return getStaticProps.default(rendering, layout, context)
  })
}

export default Banner
