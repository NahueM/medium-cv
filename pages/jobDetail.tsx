import type { NextPage } from 'next'
import AppLayout from '../components/appLayout'
import SideBar from '../components/shared/SideBar'
import { UseJobsContext } from '../hooks/useJobsContext'
import JobDetailContent from '../components/JobDetailContent'
import Loading from '../components/shared/Loading'

const JobDetail: NextPage = () => {
  const [state] = UseJobsContext()

  return (
      <AppLayout>
          {
            state.jobSelected
              ? (
            <div className='flex h-full'>
                <JobDetailContent />
                <SideBar />
            </div>
                )
              : (
                <Loading />
                )
          }
      </AppLayout>
  )
}

export default JobDetail
