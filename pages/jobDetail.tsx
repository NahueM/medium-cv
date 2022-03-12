import type { NextPage } from 'next'
import AppLayout from '../components/appLayout'
import Avatar from '../components/shared/avatar'

const JobDetail: NextPage = () => {
  return (
      <AppLayout>
        <div>
            <div className='flex justify-center'>
                <div className='flex flex-col mt-24 justify-center items-center max-w-4xl xs:mt-24 sm:mt-22 bg-white '>
                    <div className='flex flex-row m-5 p-2 border border-grey items-center rounded-sm shadow-md'>
                        <div className='min-w-20 w-24 sm:mx-2 mr-5 md:mx-5'>
                            <Avatar alt={''} src={'/avatarNahuel.jpg'} high={14} width={14}/>
                        </div>
                        <p className='inline-block text-sm font-semibold lg:textlg'>{'"Always working to be the Senior example I needed when I was a Junior"'}</p>
                    </div>
                    <h1 className='text-center text-3xl font-bold my-10'> Mis inicios como programador </h1>
                    <h3 className='text-xl mb-5 text-grey'> subtitulo </h3>
                    <div className='flex-col p-5 shadow-md items-center border border-grey justify-center text-center mb-10 divide-b-2'>
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
                <aside className='hidden md:block h-full border-l border-grey pt-40 min-w-[25%] bg-white'>
                    <div className='mx-24'>
                        <Avatar alt={'NahuelMaya'} src={'/avatarNahuel.jpg'} width={14}/>
                    </div>
                </aside>
            </div>
        </div>
      </AppLayout>
  )
}
export default JobDetail

// width-full object-cover
