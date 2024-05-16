import React from 'react'

function Home() {
  return (
    <>

    <div className='flex flex-row justify-around mb-10'>
        
        <div>
            <img src="https://i.ibb.co/5BCcDYB/Remote2.png" className='w-96 p-10' />
        </div>

        <div className='w-96 py-10 text-lg font-serif'>
            <p>
            A JavaScript library for building user interfaces. 
            No strings attached to any component framework or design
            language. Solid is the evolution of React
            and React Native, designed with the best
            parts of each. Developed by a core
            team at Facebook and maintained by a large community
            of contributors.

            </p>

            <button className='bg-zinc-800 text-white px-5 py-1 my-1 rounded-md outline-none'>Get started</button>
        </div>
    </div>
    
  
    </>
  )
}

export default Home
