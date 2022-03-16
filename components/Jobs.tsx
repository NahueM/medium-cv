import { useEffect } from 'react'
import { fetchJobs } from '../firebase/client'
import ThumbnailCard from './shared/ThumbnailCard'
import { Briefcase } from 'react-feather'
import Loading from './shared/Loading'
import Link from 'next/link'
import { UseJobsContext } from '../hooks/useJobsContext'
import { JobActions } from '../constants/actions'

interface Job {
  companyDescription: string,
  duration: {
    years: number,
    months: number
  },
  id: string,
  jobDescription: string,
  rol: string,
  startDate: {seconds: number, nanoseconds: number},
  title: string
}

function Jobs () {
  const [state, dispatch] = UseJobsContext()
  const { data: jobs } = state.jobs

  useEffect(() => {
    if (!jobs?.length) {
      (
      fetchJobs() as Promise<Job[]>).then((response) => {
        dispatch({ type: JobActions.JOBS_REQUEST_START })
        const orderedJobs: Job[] = [...response.sort((a, b) => a.startDate.seconds < b.startDate.seconds ? -1 : 1).reverse()]
        console.log('entre')
        dispatch({ type: JobActions.JOBS_REQUEST_SUCCESS, payload: orderedJobs })
      })
    }
  }, [])

  const handleJobClick = (id: string) => {
    const jobSelected = jobs?.find(job => job.id === id)
    dispatch({ type: JobActions.SET_JOB_SELECTED, payload: jobSelected })
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex items-center '>
        <Briefcase className='m-5'/>
        <h1 className='font-medium text-lg'>Jobs</h1>
      </div>
      {jobs?.length
        ? <Link href="/jobDetail" >
            <div className='flex-col sm:grid grid-cols-2 lg:grid-cols-3' >
              {jobs.map((job: Job) =>
                <ThumbnailCard
                  key={job.id}
                  id={job.id}
                  rol={job.rol}
                  startDate={job.startDate}
                  duration={job.duration}
                  onJobClick={handleJobClick}
                />
              )}
            </div>
          </Link>
        : <Loading />
      }
    </div>
  )
}

export default Jobs
