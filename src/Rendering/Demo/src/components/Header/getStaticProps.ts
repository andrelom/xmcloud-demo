import type { GetStaticComponentProps } from '@sitecore-jss/sitecore-jss-nextjs'

import { GraphQLRequestClient } from '@sitecore-jss/sitecore-jss-nextjs'
import fixPropertyNames from '@/core/fixPropertyNames'
import config from '@/temp/config'

import { GetHeaderQuery, GetHeaderDocument } from './GetHeaderQuery.graphql'

const client = new GraphQLRequestClient(config.graphQLEndpoint, {
  apiKey: config.sitecoreApiKey,
})

const getStaticProps: GetStaticComponentProps = async (rendering, layout) => {
  rendering = fixPropertyNames(rendering)
  layout = fixPropertyNames(layout)

  const id = rendering.dataSource
  const language = layout?.sitecore?.context?.language ?? 'en'

  const result = await client.request<GetHeaderQuery>(GetHeaderDocument, {
    datasource: id,
    language: language,
  })

  return {
    data: result.datasource ?? {},
  }
}

export default getStaticProps
