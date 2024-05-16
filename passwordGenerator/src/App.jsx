import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numbersAllowed,setNumbersAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")
  const [clicked,setClicked]=useState(false)

  const passwordGenerator=useCallback(()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numbersAllowed) str+= '123456789'
    if(charAllowed) str+='!@#$%^&*()_+'

    for(let i=1;i<=length;i++){
      pass=pass+str.charAt(Math.floor(Math.random() * str.length+1))
    }

    setPassword(pass)
  },[length,charAllowed,numbersAllowed])
 
  useEffect(()=>{
    passwordGenerator();
  },[length,charAllowed,numbersAllowed])

  const passRef=useRef(null)

  const copyPassword=useCallback(()=>{
    passRef.current?.select();
    
    window.navigator.clipboard.writeText(password)
    setClicked(true)

  },[password])

  return (
    <>
        <div className='w-full h-screen bg-black flex justify-center items-center'>

          <div className='rounded-md bg-gray-600 text-center my-5 p-5'>
              <h1 className='text-white text-xl font-bold uppercase'>Password Generator</h1>

              <div className='flex overflow-hidden mb-4 shadow-md rounded-lg'>
                <input type='text' 
                 className='rounded-lg outline-none w-full py-1 px-3 '
                 placeholder='password'
                 readOnly
                 value={password}
                 ref={passRef} />
                

                <button onClick={copyPassword} className={`text-white rounded-md bg-blue-600 p-2 mx-2 outline-none ${clicked? 'bg-blue-400' : ''}`}>
                {clicked? 'Copied':'Copy'}
                </button>
              </div>

          
              <div className='flex gap-x-1 text-orange-500 text-lg font-semibold ' >
                <input type='range' max={30} min={8} value={length} className='cursor-pointer' 
                onChange={(e)=>{setLength(e.target.value)}}/>
                <label >Length ({length})</label>


                <input type='checkbox' 
                defaultChecked={numbersAllowed}
                onChange={()=>{setNumbersAllowed((prev)=>!prev)}} />
                <label>Numbers</label>
              
                <input type='checkbox'
                  defaultChecked={charAllowed}
                  onChange={()=> {setCharAllowed((prev)=>!prev)}}  
                />
                <label>Characters</label>
              
              </div>

              <div></div>
          </div>
        </div>
    </>
  )
}

export default App
