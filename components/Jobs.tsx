import { useEffect, useState } from 'react'
import { fetchJobs } from '../firebase/client'
import ThumbnailCard from './shared/ThumbnailCard'
import { Briefcase } from 'react-feather'
import LoadingCard from './shared/LoadingCard'
import Link from 'next/link'

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
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    (fetchJobs() as Promise<Job[]>).then((response) => {
      const orderedJobs: Job[] = [...response.sort((a, b) => a.startDate.seconds < b.startDate.seconds ? -1 : 1).reverse()]
      setJobs(orderedJobs)
    })
  }, [])

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex items-center '>
        <Briefcase className='m-5'/>
        <h1 className='font-medium text-lg'>Jobs</h1>
      </div>
      {jobs.length > 0
        ? <Link href="/jobDetail" >
            <div className='flex-col sm:grid grid-cols-2 lg:grid-cols-3'>
              {jobs.map(job => <ThumbnailCard key={job.id} id={job.id} rol={job.rol} startDate={job.startDate} duration={job.duration}/>)}
            </div>
          </Link>
        : <LoadingCard />
      }
    </div>
  )
}

export default Jobs
