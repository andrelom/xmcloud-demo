import type { LayoutServiceData } from '@sitecore-jss/sitecore-jss-nextjs'

import React from 'react'

import Head from 'next/head'
import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs'
import Scripts from '@/containers/Scripts'

interface LayoutProps {
  layoutData: LayoutServiceData
}

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore

  return (
    <>
      <Scripts />
      <Head>
        <title>Demo</title>
      </Head>
      <div className="d-flex h-100 text-center text-bg-dark">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" style={{ maxWidth: '64em' }}>
          {route && <Placeholder name="header" rendering={route} />}
          <main className="px-3">{route && <Placeholder name="main" rendering={route} />}</main>
          {route && <Placeholder name="footer" rendering={route} />}
        </div>
      </div>
    </>
  )
}

export default Layout
