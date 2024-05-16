import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid}=useParams()
  return (
    <>
    
    <p className='text-center text-lg p-5'>Practice of useParams hook for fetch userId</p>
      <h1 className='text-xl text-center bg-zinc-500 text-white p-5 mb-5'>user :{userid}</h1>
    </>
  )
}

export default User
