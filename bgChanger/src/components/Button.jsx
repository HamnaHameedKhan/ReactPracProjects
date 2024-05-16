import React from 'react'

const BtnColor=['Red','Green','Blue','Black','Purple','Orange','Pink','Yellow',"Brown","Lavender"]
function Button({setColor}) {

   return(
    <div className='flex flex-wrap gap-3'>
      {BtnColor.map((color,index)=>{
        return(
          <button className='outline-none text-white p-2 rounded-md ' style={{backgroundColor:color}}
          onClick={()=>setColor(color)}>{color}</button>
        )
      })}
    </div>
   )
 
}

export default Button
