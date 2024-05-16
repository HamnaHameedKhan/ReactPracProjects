import React from 'react'
import logo from "../../assets/react.svg"
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>

      <div className='flex flex-row justify-around bg-zinc-800  w-full h-44 items-center'>

        <div className=''>

          <img src={logo} width={60} className='py-5' />

        </div>

        <div >
          <ul>
            <li className='font-bold text-lg text-white'>Resources</li>
            <li>
              <NavLink to='/'
                className={({ isActive }) => ` ${isActive ? "text-orange-700" : "text-white"}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='about' className={({ isActive }) => `${isActive ? "text-orange-700" : "text-white"}`}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='contact' className={({ isActive }) => `${isActive ? "text-orange-700" : "text-white"}`}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <ul className='text-white'>
            <li className='font-bold text-lg '>Follow Us</li>
            <li>
              <NavLink to='github' className={({ isActive }) => `${isActive ? "text-orange-700" : "text-white"}`}>
                Github
              </NavLink>
            </li>
            <li>Linkedn</li>
            <li>Facebook</li>
          </ul>
        </div>

        <div>
          <ul className='text-white'>
            <li className='font-bold text-lg '>Legal</li>
            <li>Proivacy Policy</li>
            <li>Terms & condition</li>
            <li>FAQ's</li>
          </ul>
        </div>

      </div>

      <div className='text-white text-center bg-zinc-800 py-2'>
        <h2 >Copy right 2024</h2>
      </div>


    </>
  )
}

export default Footer
