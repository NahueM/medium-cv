
import { useEffect, useState } from 'react'
import { onAuthStateChange } from '../firebase/client'

export default function useUser () {
  const [user, setuser] = useState(null)

  useEffect(() => {
    onAuthStateChange(setuser)
  }, [])

  return user
}
