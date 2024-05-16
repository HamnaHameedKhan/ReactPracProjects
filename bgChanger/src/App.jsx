import { useState } from 'react'
import Button from './components/Button'



function App() {
  const [color,setColor]=useState("olive")
  return (
  
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center items-center h-full w-full px-2'>
      <div className='flex flex-wrap justify-center p-4 gap-3 bg-white rounded-md'>
        <Button setColor={setColor}/>
      </div>
    </div>
  </div>
 
  )
}

export default App
