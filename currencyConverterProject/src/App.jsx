import { useState } from 'react'
import InputBox from './components/InputBox'
import SwapBtn from './components/SwapBtn'
import Button from './components/Button'
import UseCurrencyData from './customHooks/UseCurrencyData'
import bgVideo from '../src/assets/bg_video.mp4'



function App() {

        const [amount,setAmount]=useState(0)
        const [from,setFrom]=useState('USD')
        const [to,setTo]=useState('PKR')
        const [convertedAmount,setConvertedAmount]=useState(0)
        

        const currencyInfo=UseCurrencyData(from)

        const options = currencyInfo ? Object.keys(currencyInfo) : [];
        

       const swap=()=>{
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
       }

      const convert=()=>{ 
        setConvertedAmount(amount * currencyInfo[to])
      }


  return (
    <>


      <div className="flex justify-center items-center h-screen relative">
        {/* Video */}
        <video className="w-full h-full object-cover absolute inset-0" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="bg-sky-800 bg-opacity-50 p-5 outline-none w-full max-w-screen-sm z-10 rounded-lg">
          <div className="mx-auto">


            <InputBox 
            label='From'
            amount={amount} 
            currencyOptions={options} 
            onCurrencyChange={(currency)=>setAmount(currency)}
            selectCurrency={from}
            onAmountChange={(amount)=>setAmount(amount)}
             />


            <SwapBtn swap={swap()} />

            <InputBox label='To'   
            amount={convertedAmount} 
            currencyOptions={options} 
            onCurrencyChange={(currency)=>setTo(currency)} 
            selectCurrency={to}
            />


            <Button convert={convert()} text={`convert {from.toUpperCase()} to {to.toUpperCase()}` } />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
