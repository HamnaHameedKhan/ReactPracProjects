import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/react.svg"



function Header() {
  return (
    <>

        <nav className='flex flex-row justify-around p-5 bg-zinc-800 text-white'>
        <div>
        <img src={logo}  width={50} />
        </div>

            <div>
            <ul className='flex flex-cols'>
            <li>
                <NavLink to='/'  
                className={({isActive}) =>
                                        `px-5 duration-200 ${isActive ? "text-orange-700" : "text-white"} hover:text-orange-700 `
                                    } >
                                    Home
                </NavLink>
                </li>

                <li>
                <NavLink to='about'  
                className={({isActive}) =>
                                        `px-5 duration-200 ${isActive ? "text-orange-700" : "text-white"} hover:text-orange-700 `
                                    } >
                                    About
                </NavLink>
                </li>

                <NavLink to='contact'  
                className={({isActive}) =>
                                        `px-5 duration-200 ${isActive ? "text-orange-700" : "text-white"} hover:text-orange-700 `
                                    } >
                                    Contact
                </NavLink>
                <NavLink to='github'  
                className={({isActive}) =>
                                        `px-5 duration-200 ${isActive ? "text-orange-700" : "text-white"} hover:text-orange-700 `
                                    } >
                                    Github
                </NavLink>

                <NavLink to='user/userid'  
                className={({isActive}) =>
                                        `px-5 duration-200 ${isActive ? "text-orange-700" : "text-white"} hover:text-orange-700 `
                                    } >
                                    User
                </NavLink>
                </ul>
            </div>

            <div >
              <button className='rounded-md bg-white text-zinc-800 text-lg px-4 py-1'>Login</button>
            </div>


        </nav>
      
    </>
  )
}

export default Header
