import React from 'react'
import {projectStats} from "../data"
import {tools} from "../data"

const Projects = () => {
  return (
    <div>
    <div className='w-full flex flex-wrap items-center justify-center gap-10 lg:gap-20 pt-10'>
        {
            projectStats.map((proj,index)=>(
                <div className='flex flex-col gap-2 items-center px-4 py-3
                bg-[#0000FF20] rounded-md'>
                    <p className='text-white text-2xl font-bold'>
                        {proj.name}
                    </p>
                    <p className='text-white text-sm'>
                        {proj.value}
                    </p>
                </div>

            ))

        }

    </div>
    <div className='w-full flex flex-wrap items-center justify-center gap-20 lg:gap-20 mt-16'>
        {
            tools.map((tool,index)=>(
                <div className='flex gap-2 items-center bg-white rounded-md shadow-lg px-5py1
                '> 
                    <img src={tool.icon} alt="" className='w-10 h-10' />
                    <p className='text-black text-md'>{tool.name}</p>

                </div>
            ))
            
        }

    </div>
    </div>
  )
}

export default Projects