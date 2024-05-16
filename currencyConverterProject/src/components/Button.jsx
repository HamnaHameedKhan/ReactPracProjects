import React from 'react'

function Button({convert,text}) {
  return (
    <div className='flex justify-center items-center mt-5'>
            <button className='text-sky-600 text-xl font-bold rounded-md shadow-lg p-1 outline-none bg-white w-full'
            onClick={convert}>{text}</button>

    </div>
  )
}

export default Button
