import type { NextPage } from 'next'
import AppLayout from '../components/appLayout'
import SideBar from '../components/shared/SideBar'
import PhraseCard from '../components/shared/PhraseCard'
import { UseJobsContext } from '../hooks/useJobsContext'
import { FormattedMessage } from 'react-intl'

const JobDetail: NextPage = () => {
  const [state] = UseJobsContext()
  const { jobSelected } = state
  const { jobDescription, companyDescription, id } = jobSelected

  return (
      <AppLayout>
            <div className='flex h-full'>
                <div className='flex border-none max-w-4xl flex-col m-5 mt-20 justify-center items-center bg-white md:max-w-[65%] lg:max-w-[70%]'>
                    <PhraseCard />
                    <h1 className='text-center text-3xl font-bold my-10'><FormattedMessage id={id}/></h1>
                    <div className='flex-col p-5 shadow-md items-center border border-light-blue shadow-lg justify-center text-center mb-10 divide-b-2'>
                        <div className='flex items-center justify-center'>
                            <img src={`/${id}.jpg`} className='' />
                        </div>
                        <p className='font-bold text-grey'><FormattedMessage id={companyDescription}/></p>
                    </div>
                    <article className='text-justify text-xl'>
                        <FormattedMessage id={jobDescription}/>
                    </article>
                </div>
                <SideBar />
            </div>
      </AppLayout>
  )
}

export default JobDetail
