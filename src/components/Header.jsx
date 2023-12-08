import React from 'react'
import {Profile,Mongodb,Nodejs,Reactjs,Redux} from "../assets"

const Header = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row px-4 md:px-10 gap-10 2xl:gap-20 py-20'>
        <div>
        <span className='text-lg font-bold text-orange-800 lg:my-7'>Full-Stack Web Developer</span>
        <div className='flex gap-4 items-center my-4'>
            <h1 className='text-gray-800 dark:text-neutral-100 text-5xl lg:text-2xl 2xl:text-2xl font-bold text-center'>
                I'am a 
                </h1>
            <div className='flex items-center justify-center text-white shadow-lg
                bg-blue-800 dark:bg-[#224cff10] dark:text-[#224cff] rounded-full
                lg:text-2xl
 
            
            '>
                <p className='text-3xl '>software developer</p>
            </div>
        </div>
        <h1 className='text-5xl 2xl:text-7xl font font-extrabold text-black dark:text-neutral-100 tracking-wider'>
                Ranjit devadiga
        </h1>
        
        <p className='text-md text-black dark:text-pink-600 mt-5 2xl:mt-10 mb-10'>
                Full-stack web developer with javascript react skills with Api knowledge
        </p>

        <div className='text-mt-10 flex gap10'>
            <button className='bg-orange-700 text-lg text-white
            font-semibold rounded-md py-3 px-5'>
                Hire Me
            </button>
            <a href="#projects">
                <button className='text-lg text-white font-semibold rounded-md px-5 py-3 ml-4 bg-black dark:bg-[#224cff10]'>
                    Projects
                </button>
            </a>
            </div>

        </div>
        <div className='w-full flex-1 flex justify-center'>

        

        <div className='w-[350px] h-[350px] md:w-[400px] md:h-[400px]
        2xl:w-[500px] 2xl:h-[500px] rounded-full border border-gray-600
        dark:border-gray-200 relative md:nt-20 lg:mt-0 flex items-center justify-center
        '>
            <img src={Profile} 
            alt=""
            className='w-auto h-full absolute -top-5 md:-top-10' />
            <div className='relative w-full h-full rounded-full'>
                <img src={Reactjs} alt=""
                className='absolute top-7 left-3 md:w-[60px]top-20 left-0  2xl:left-10 w-16
                h-16 md:w-20 md:h-20' />

                <img src={Mongodb} alt=""
                 className='absolute top-7 right-3 md:w-[60px]top-20 right-0  2xl:right-10 w-16
                 h-16 md:w-20 md:h-20' />

                <img src={Redux} alt=""
                 className='absolute bottom-7 left-3 md:w-[60px]bottom-20 left-0  2xl:left-10 w-16
                 h-16 md:w-20 md:h-20' />

                

                <img src={Nodejs} alt=""
                 className='absolute bottom-7 right-3 md:w-[60px]bottom-20 right-0  2xl:right-10 w-16
                 h-16 md:w-20 md:h-20' />
            </div>
            </div>
        </div>
         
    </div>
  )
}

export default Header