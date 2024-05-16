import React ,{useState} from "react";
import '../src/App.css'



// counter Project
const App = () => {
  let [counter,setCounter] = useState(0);

const AddValue=()=>{
  if(counter<20){
    setCounter(counter+1)
  }
  else{
    alert("Counter can't be greater than 20")
    setCounter(20)
  }
}

const RemoveValue=()=>{
  if(counter>1){
    setCounter(counter-1)
  }
  else{
    alert("Counter can't be less than 1")
    setCounter(1)
  }
}

const reset=()=>{
  setCounter(0)
}
  return(
    <>
    <div>
      <h1 style={{textTransform:"uppercase", color:"white",fontSize:'30px'}}>Counter Project</h1>


      </div>

      <div className="flex gap-4 text-white font-extrabold text-lg outline-none justify-center">
        <button className="bg-green-700 px-10 py-1 " onClick={AddValue}> ➕ </button>
        <button className="bg-pink-300 px-10 py-1 text-2xl">{counter}</button>
        <button className="bg-green-700 px-10 py-1 " onClick={RemoveValue}> ➖</button>
      </div>

      <button className="bg-red-500 text-2xl text-white mt-20 p-2" onClick={reset}>Reset Counter</button>
    </>
  )
};

export default App;
