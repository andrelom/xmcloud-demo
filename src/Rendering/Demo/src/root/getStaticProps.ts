import type { GetStaticProps } from 'next'

import { sitecorePagePropsFactory } from 'lib/page-props-factory'

const getStaticProps: GetStaticProps = async (context) => {
  const props = await sitecorePagePropsFactory.create(context)

  return {
    props: { ...props, country: context.params?.country },
    notFound: props.notFound,
  }
}

export default getStaticProps
