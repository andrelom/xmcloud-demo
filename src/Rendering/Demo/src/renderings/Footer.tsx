import type { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs'

import Footer from '@/components/Footer'

export const getStaticProps: GetStaticComponentProps = async (rendering, layout, context) => {
  return import('@/components/Banner/getStaticProps').then((getStaticProps) => {
    return getStaticProps.default(rendering, layout, context)
  })
}

export default Footer
