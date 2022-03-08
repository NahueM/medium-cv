import Head from 'next/head'
import Header from '../Header'

function AppLayout ({ children }) {
  return (
    <div>
        <Head>
            <title>Medium Clone</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div>
            {children}
        </div>
    </div>
  )
}

export default AppLayout
