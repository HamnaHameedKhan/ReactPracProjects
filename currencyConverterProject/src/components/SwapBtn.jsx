import React from 'react'

function SwapBtn(swap) {
  return (
    <div className='flex justify-center items-center'>
        <button className='bg-sky-600 p-2 flex-shrink-0 rounded-lg shadow-lg outline-none text-white font-bold text-xl -mt-3 -mb-3  '
        onClick={swap}>Swap</button>  
    </div>
  )
}

export default SwapBtn
