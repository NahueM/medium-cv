import { ReactChild } from 'react'
import Head from 'next/head'
import Header from '../Header'

type Props = {
  children: ReactChild[] | ReactChild
  showAvatar?: boolean
}

function AppLayout ({ children, showAvatar = false }: Props) {
  return (
    <div className='h-full'>
        <Head>
            <title>Medium Clone</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header showAvatar={showAvatar}/>
        {children}
    </div>
  )
}

export default AppLayout
