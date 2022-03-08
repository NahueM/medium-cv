import { useEffect, useState } from 'react'
import { fetchJobs } from '../firebase/client'
import ThumbnailCard from './shared/ThumbnailCard'
import { Briefcase } from 'react-feather'
import LoadingCard from './shared/LoadingCard'

function Jobs () {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetchJobs()
      .then(jobs => setJobs(
        jobs.sort((a: object, b: object) => a.startDate.seconds - b.startDate.seconds).reverse()))
  }, [])

  return (
    <div className='max-w-7xl mx-auto'>
    <div className='flex items-center '>
      <Briefcase className='m-5'/>
      <h1 className='font-medium text-lg'>Jobs</h1>
    </div>
        {jobs.length > 0
          ? <div className='flex-col sm:grid grid-cols-2 lg:grid-cols-3 '>
              {jobs.map(job => <ThumbnailCard key={job.id} id={job.id} rol={job.rol} startDate={job.startDate} duration={job.duration}/>)}
            </div>
          : <LoadingCard />
        }
    </div>
  )
}

export default Jobs
