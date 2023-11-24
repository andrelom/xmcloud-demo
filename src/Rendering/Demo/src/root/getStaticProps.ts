import type { GetStaticProps } from 'next'

import { sitecorePagePropsFactory } from 'lib/page-props-factory'

const getStaticProps: GetStaticProps = async (context) => {
  const props = await sitecorePagePropsFactory.create(context)

  return {
    notFound: props.notFound,
    props: {
      ...props,
      session: {
        country: context.params?.country,
        username: context.params?.username,
      },
    },
  }
}

export default getStaticProps
