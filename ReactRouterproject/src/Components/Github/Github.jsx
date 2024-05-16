import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
const data =useLoaderData()

// one method for fetch Api
//const [data,setData]=useState([])
  // useEffect(()=>{
  //  fetch('https://api.github.com/users/hamnahameed')
  //   .then(response=>response.json())
  //   .then(data=>{
  //     console.log(data)
  //       setData(data)
  //   })
  // },[])
  return (
    <>

      <div className='text-center text-lg'>
        <h1>Github Followers:{data.followers}</h1>

        <div className='flex flex-row justify-center mb-5'>
        <p className='py-10'>Github Image:</p>
        <img src={data.avatar_url} className='w-32 px-5 py-5 '/>
        </div>
      </div>
      
    </>
  )
}

export default Github

//2nd method; Loader

export const githubData=async()=>{
  const response =await fetch('https://api.github.com/users/hamnahameed')
  return response.json()
}
