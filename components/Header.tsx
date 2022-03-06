import { useState, useEffect } from 'react'
import Link from 'next/link'
import { loginWithGitHub, onAuthStateChange } from '../firebase/client'
import Avatar from './shared/avatar'

function Header () {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChange(setUser)
  })

  const handleClick = () => {
    loginWithGitHub()
      .then(setUser)
      .catch(err => console.log(err))
  }

  return (
        <header className="sticky bg-light-blue border-b border-black">
            <div className="flex justify-between p-5 max-w-7xl mx-auto">
                <div className="flex items-center space-x-5">
                    <Link href="/">
                        <img className="w-44 object-contain cursor-pointer" src="/medium.png" />
                    </Link>
                </div>
                <div className="flex items-center space-x-5 text-green-600">
                    <div className="hidden md:inline-flex items-center space-x-5">
                        <h3>Our story</h3>
                        <h3>Membership</h3>
                        <h3>Write</h3>
                    </div>
                    {!user && <h3 onClick={handleClick} className="cursor-pointer">Sing In</h3>}
                    <h3 className="text-white bg-black px-4 py-1 rounded-full  font-extralight">Get Started</h3>
                    {!!user && <Avatar src={user.avatar} alt={user.username}/>}
                </div>
            </div>
        </header>
  )
}

export default Header
