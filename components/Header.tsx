import Link from 'next/link'
import Avatar from './shared/avatar'
import { Menu } from 'react-feather'
import { FormattedMessage } from 'react-intl'

interface Props {
    showAvatar: boolean
}

function Header ({ showAvatar }: Props) {
  return (
        <header className="bg-light-blue border-b border-black fixed top-0 left-0 right-0 inline-block z-50 ">
            <div className="flex justify-between p-5 max-w-7xl mx-auto md:mr-2">
                <div className="flex items-center space-x-5">
                    <Link href="/">
                        <img className="w-32 sm:w-44 object-contain cursor-pointer" src="/LogoNahuel.png" />
                    </Link>
                </div>
                <div className="mr-2 xs:hidden">
                    <div className="dropdown inline-block relative">
                        <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                            <Menu />
                        </button>
                        <ul className="text-sm w-24 pr-22 right-[1%] hidden dropdown-menu absolute pt-1 bg-light-blue text-black font-semibold rounded text-center shadow-lg border border-grey">
                            <li className="">
                                <a className="rounded-t bg-gray-200 hover:text-grey py-2 px-4 block whitespace-no-wrap" href="#">
                                    <FormattedMessage id='jobs' />
                                </a>
                            </li>
                            <li className="">
                                <a className="bg-gray-200 hover:text-grey py-2 px-4 block whitespace-no-wrap" href="#">
                                    <FormattedMessage id='skills' />
                                </a>
                            </li>
                            <li className="">
                                <a className="rounded-b bg-gray-200 hover:text-grey py-2 px-4 block whitespace-no-wrap" href="#">
                                    <FormattedMessage id='aboutMe' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="hidden xs:flex z-1 items-center space-x-5 mr-10 md:mr-12 ">
                    <div className="inline-flex items-center space-x-5 md:hidden">
                        <h3><FormattedMessage id='jobs' /></h3>
                        <h3><FormattedMessage id='skills' /></h3>
                        <h3><FormattedMessage id='aboutMe' /></h3>
                    </div>
                    <p className='hidden md:flex text-right text-lg font-semibold lg:text-lg'><FormattedMessage id='phrase'/></p>
                    {showAvatar && <Avatar src={'/avatarNahuel.jpg'} alt={'Nahuel Maya'} width={12}/>}
                </div>
            </div>
        </header>
  )
}

export default Header
