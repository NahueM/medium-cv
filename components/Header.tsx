import Link from 'next/link'
import { loginWithGitHub } from '../firebase/client'
import Avatar from './shared/avatar'
import useUser from '../hooks/useUser'
import { Menu } from 'react-feather'

interface Props {
    showAvatar: boolean
}

function Header ({ showAvatar }: Props) {
  const user = useUser()

  //   const handleClick = () => {
  //     loginWithGitHub()
  //       .catch(err => console.log(err))
  //   }

  return (
        <header className="bg-light-blue border-b border-black fixed top-0 left-0 right-0 inline-block">
            <div className="flex justify-between px-5 py-2 max-w-7xl mx-auto">
                <div className="flex items-center space-x-5">
                    <Link href="/">
                        <img className="w-32 sm:w-44 object-contain cursor-pointer" src="/LogoNahuel.png" />
                    </Link>
                </div>
                <div className="mr-2 xs:hidden">
                    <div className="dropdown inline-block relative">
                        <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center mr-5">
                            <Menu className=''/>
                        </button>
                        <ul className="text-sm w-24 mr-12 dropdown-menu hidden absolute pt-1 bg-light-blue text-black font-semibold rounded text-center shadow-lg border border-grey">
                            <li className=""><a className="rounded-t bg-gray-200 hover:text-grey py-2 px-4 block whitespace-no-wrap" href="#">Jobs</a></li>
                            <li className=""><a className="bg-gray-200 hover:text-grey py-2 px-4 block whitespace-no-wrap" href="#">Skills</a></li>
                            <li className=""><a className="rounded-b bg-gray-200 hover:text-grey py-2 px-4 block whitespace-no-wrap" href="#">About me</a></li>
                        </ul>
                    </div>
                </div>
                <div className="hidden xs:flex items-center space-x-5 mr-6 sm:mr-10">
                    <div className="inline-flex  items-center space-x-5 md:hidden">
                        <h3>Jobs</h3>
                        <h3>Skills</h3>
                        <h3>About me</h3>
                    </div>
                    {/* <h3 onClick={handleClick} className="cursor-pointer">Sing In</h3> */}
                    {/* <h3 className="hidden md:inline-flex text-white bg-black px-4 py-1 rounded-full font-extralight">Get Started</h3> */}
                    <p className='hidden md:inline-block text-lg font-semibold lg:textlg'>{'"Always working to be the Senior example I needed when I was a Junior"'}</p>
                    {showAvatar && <Avatar src={'/avatarNahuel.jpg'} alt={'Nahuel Maya'} width={12}/>}
                </div>
            </div>
        </header>
  )
}

export default Header
