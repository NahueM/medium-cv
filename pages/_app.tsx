import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { JobsContextProvider } from '../hooks/useJobsContext'
import { IntlProvider } from 'react-intl'
import { useRouter } from 'next/dist/client/router'
import intlESmessages from '../content/locale/es.json'
import intlENmessages from '../content/locale/en.json'

function MyApp ({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()
  const [shortLocale] = locale ? locale.split('-') : ['en']

  const langs: any = {
    es: intlESmessages,
    en: intlENmessages
  }

  const messages = langs[shortLocale]

  return (
    <IntlProvider
      locale={shortLocale}
      messages={messages}
      onError={() => null}
    >
      <JobsContextProvider>
        <Component {...pageProps} />
      </JobsContextProvider>
    </IntlProvider>
  )
}

export default MyApp
