import Link from 'next/link'
import { loginWithGitHub } from '../firebase/client'
import Avatar from './shared/avatar'
import useUser from '../hooks/useUser'

function Header () {
  const user = useUser()

  const handleClick = () => {
    loginWithGitHub()
      .catch(err => console.log(err))
  }

  return (
        <header className="bg-light-blue border-b border-black fixed left-0 right-0 ">
            <div className="flex justify-between px-5 py-2 max-w-7xl mx-auto">
                <div className="flex items-center space-x-5">
                    <Link href="/">
                        <img className="w-32 sm:w-44 object-contain cursor-pointer" src="/LogoNahuel.png" />
                    </Link>
                </div>
                <div className="flex items-center space-x-5 text-green-600">
                    <div className="hidden md:inline-flex items-center space-x-5">
                        <h3>Jobs</h3>
                        <h3>Skills</h3>
                        <h3>About me</h3>
                    </div>
                    {!user && <h3 onClick={handleClick} className="cursor-pointer">Sing In</h3>}
                    <h3 className="hidden md:inline-flex text-white bg-black px-4 py-1 rounded-full font-extralight">Get Started</h3>
                    {!!user && <Avatar src={user.avatar} alt={user.username}/>}
                </div>
            </div>
        </header>
  )
}

export default Header
