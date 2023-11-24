import type { AppProps } from 'next/app'
import type { SitecorePageProps } from 'lib/page-props'

import { I18nProvider } from 'next-localization'

import 'assets/main.scss'

function App({ Component, pageProps }: AppProps<SitecorePageProps>): JSX.Element {
  const { dictionary, ...rest } = pageProps

  return (
    <>
      <I18nProvider lngDict={dictionary} locale={pageProps.locale}>
        <Component {...rest} />
      </I18nProvider>
    </>
  )
}

export default App
