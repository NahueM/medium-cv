import type { NextPage } from 'next'
import AppLayout from '../components/appLayout'
import Banner from '../components/Banner'
import Jobs from '../components/Jobs'

const Home: NextPage = () => {
  return (
      <AppLayout showAvatar>
        <Banner />
        <Jobs />
      </AppLayout>
  )
}
export default Home
