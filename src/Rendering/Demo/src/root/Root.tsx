import type { SitecorePageProps } from 'lib/page-props'

import { useEffect } from 'react'
import { handleEditorFastRefresh } from '@sitecore-jss/sitecore-jss-nextjs/utils'
import { componentBuilder } from 'temp/componentBuilder'

import {
  RenderingType,
  SitecoreContext,
  ComponentPropsContext,
  EditingComponentPlaceholder,
} from '@sitecore-jss/sitecore-jss-nextjs'

import Layout from '@/containers/Layout'
import NotFound from '@/containers/NotFound'
import SessionContext from '@/components/SessionContext'

export type RootSitecorePageProps = SitecorePageProps & {
  country: string | undefined
}

const Root = ({ notFound, componentProps, layoutData, country }: RootSitecorePageProps): JSX.Element => {
  useEffect(() => {
    handleEditorFastRefresh()
  }, [])

  if (notFound || !layoutData.sitecore.route) {
    return <NotFound />
  }

  const isEditing = layoutData.sitecore.context.pageEditing
  const isComponentRendering = layoutData.sitecore.context.renderingType === RenderingType.Component

  return (
    <ComponentPropsContext value={componentProps}>
      <SitecoreContext componentFactory={componentBuilder.getComponentFactory({ isEditing })} layoutData={layoutData}>
        <SessionContext data={{ country }}>
          {isComponentRendering ? (
            <EditingComponentPlaceholder rendering={layoutData.sitecore.route} />
          ) : (
            <Layout layoutData={layoutData} />
          )}
        </SessionContext>
      </SitecoreContext>
    </ComponentPropsContext>
  )
}

export default Root
