import { useEffect, useState } from 'react'
import { ThemeContextProvider } from './Context/ThemeContext'
import ToggleBtn from './components/ToggleBtn'
import Card from './components/Card'


function App() {

  const [themeMode,setThemeMode]=useState('light')

  const darkTheme=()=>{
      setThemeMode('dark')
  }

  const lightTheme=()=>{
    setThemeMode('light')
  }

  useEffect(()=>{
     document.querySelector('html').classList.remove('light','dark')
     document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <ThemeContextProvider value={{themeMode, darkTheme,lightTheme}}>
     <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ToggleBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
