import React from 'react'

import { FiSun } from 'react-icons/fi';
import { MdNightlight } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';
import {AiOutlineClose} from "react-icons/ai"


const Navbar = ({darkMode,isOpen,toggleMenu,toggleTheme}) => {
  return (
    <div className='px-0 2xl:px-40'>
        <div className='w-full items-center justify-between
        py-4 px-10'>
            <div className='flex items-center justify-between w-full
            space-bet'>
                <a href='/' className='text-2xl font-bold text-blue-500 cursor-pointer'> PortFolio</a>
                <ul className='hidden md:flex gap-10 text-lg text-slate-800
                dark:text-gray-200'>
                    <li className='cursor-pointer hover:text-blue-500'>
                        <a href="#home" >Home</a>
                    </li>
                    <li className='cursor-pointer hover:text-blue-500'>
                        <a href="#home" >About</a>
                    </li>
                    <li className='cursor-pointer hover:text-blue-500'>
                        <a href="#home" >Projects</a>
                    </li>
                </ul>
                <button onClick={toggleTheme} className='p-2'>
                    {darkMode ? 
                        <FiSun size={24} color='white'/> : 
                        <MdNightlight size={24} color='black'/>}
                </button>
                <div className='md:hidden '>
                    <button type='button' aria-controls='online-menu
                    'aria-expanded="false"
                    onClick={toggleMenu}
                    >
                        <BiMenu 
                        size={26}
                        className={`${isOpen ? 'hidden' : "block"} text-gray-700
                        dark:text-gray-300 mt-2`}/>

                    <AiOutlineClose
                    size={26}
                    className={`${isOpen ? "block" : "hidden"} h-6 w-6
                    dark:text-gray-400`}/>

                    </button>

                </div>
            
            </div>
            {/* mobile menu */}
            <div className={`${isOpen ? "block pt-4" : "hidden"}
            md:hidden`}
            id='mobile-menu'>
                <div className='flex flex-col gap-4 text-md text-gray-700 dark:text-neutral-200'>
                    <a href="/" onClick={toggleMenu} className='cursor-pointer '>Home</a>
                    <a href="/" onClick={toggleMenu} className='cursor-pointer '>About</a>
                    <a href="/" onClick={toggleMenu} className='cursor-pointer '>Projects</a>
                </div>
            </div>


        </div>
        
    </div>
  )
}

export default Navbar