import type { NextPage } from 'next'
import { useEffect } from 'react'
import AppLayout from '../components/appLayout'
import SideBar from '../components/shared/SideBar'
import PhraseCard from '../components/shared/PhraseCard'
import { UseJobsContext } from '../hooks/useJobsContext'

const JobDetail: NextPage = () => {
  const [state] = UseJobsContext()
  const { jobSelected } = state

  return (
      <AppLayout>
            <div className='flex h-full'>
                <div className='flex border-none max-w-4xl flex-col m-5 mt-20 justify-center items-center bg-white md:max-w-[65%] lg:max-w-[70%]'>
                    <PhraseCard />
                    <h1 className='text-center text-3xl font-bold my-10'> Mis inicios como programador </h1>
                    <h3 className='text-xl mb-5 text-grey'> subtitulo </h3>
                    <div className='flex-col p-5 shadow-md items-center border border-light-blue shadow-lg justify-center text-center mb-10 divide-b-2'>
                        <div className='flex items-center justify-center'>
                            <img src='/credil.jpg' className='' />
                        </div>
                        <p className='font-bold text-grey'>Company Description</p>
                        <p className='mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book.
                        </p>
                    </div>
                    <article>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                        of Lorem Ipsum.
                    </article>
                </div>
                <SideBar />
            </div>
      </AppLayout>
  )
}

export default JobDetail
