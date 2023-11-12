import React from 'react'
import {Profile,Mongodb,Nodejs,Reactjs,Redux} from "../assets"

const Header = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 2xl:gap-20 py-20'>
        <span className='text-lg font-bold text-orange-700'>Full-Stack Web Developer</span>
        <div className='flex gap-4 items-center my-4'>
            <h1 className='text-gray-800 dark:text-neutral-100 text-5xl'>I am a software developer </h1>

        </div>
    </div>
  )
}

export default Header