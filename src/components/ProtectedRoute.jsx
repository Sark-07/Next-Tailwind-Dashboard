'use client'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation'

const ProtectedRoute = ({children}) => {
  const session = useSession()
  const router = useRouter()
  console.log(session);
  
useEffect(() => {
  

  if (session.status === 'authenticated'){
    router.push('/dashboard')
  }else{
    router.push('/')
  
  }
 
})

    
  
  
  

  return children
}

export default ProtectedRoute