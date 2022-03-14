import Avatar from '../../components/shared/avatar'
import { Linkedin, Mail, GitHub, Smartphone } from 'react-feather'

function SideBar () {
  return (
    <aside className='hidden md:flex justify-center self-stretch pt-40 w-[30%] bg-white right-0 lg:w-[25%] ml-[5%]'>
        <div className='block fixed  sm:text-sm w-[30%] lg:w-[25%]  '>
            <div className='mx-[25%]'>
                <Avatar alt={'NahuelMaya'} src={'/avatarNahuel.jpg'} width={16}/>
            </div>
            <ul className='mx-[20%] my-5 space-y-5 sm:mx-[1%]'>
                <a target="_blank" href='https://www.linkedin.com/in/nahuelmaya/' className="grid grid-cols-5 items-center" rel="noreferrer">
                    <div className='flex bg-light-blue border border-grey rounded-full items-center justify-center p-1 shadow-md  md:h-9 w-9 '>
                        <Linkedin className='object-contain min-w-12 col-span-1'/>
                    </div>
                    <p className='hover:text-grey  text-bold md:text-sm lg:text-base'>linkedin.com/nahuelmaya</p>
                </a>
                <a target="_blank" href='https://github.com/NahueM' className="grid grid-cols-5 items-center" rel="noreferrer">
                    <div className='flex h-9 w-9  bg-light-blue border border-grey rounded-full items-center justify-center p-1 shadow-md'>
                        <Mail />
                    </div>
                    <p className='hover:text-grey  text-bold md:text-sm lg:text-base'>lnahuelmaya@gmail.com</p>
                </a>
                <a target="_blank" href='https://github.com/NahueM' className="grid grid-cols-5 items-center" rel="noreferrer">
                    <div className='flex h-9 w-9  bg-light-blue border border-grey rounded-full items-center justify-center p-1 shadow-md'>
                        <GitHub />
                    </div>
                    <p className='hover:text-grey  text-bold md:text-sm lg:text-base'>github.com/NahueM</p>
                </a>
                <div className="flex grid grid-cols-5 items-center">
                    <div className='flex h-9 w-9 bg-light-blue border border-grey rounded-full items-center justify-center p-1 shadow-md'>
                        <Smartphone />
                    </div>
                    <p className='text-sm text-bold md:text-sm lg:text-base col-span-3'>628 171 1919</p>
                </div>
            </ul>
        </div>
    </aside>
  )
}

export default SideBar
