import React from 'react'
import projects from './projects.js'
import { Element } from 'react-scroll'

function Projects() {
  return (
    <>
      <Element name="projects">
        <div id="projects" className=''>
          <h2 className='h-11 w-32 font-bold text-3xl lg:text-4xl lg:font-extrabold'>PROJECTS</h2>
          <ul className='flex justify-center items-center flex-col md:flex-row'>
            {projects && projects.map((project, id) => (
              <li key={id} className=' bg-white shadow-custom_shadow shadow-blue-500  h-auto w-[320px] text-wrap p-5 rounded-2xl my-3 md:h-[520px] md:w-[400px]  lg:w-[410px] md:m-4'>
                <div className='flex justify-center items-center'>
                  <img className=" h-[120px] w-[200px] lg:h-[160px] lg:w-[250px] rounded-md" src={project.image} />
                </div>
                <div className='py-2 lg:px-2'>
                  <h3 className='text-xl font-bold text-[#198FFF]'>{project.title}</h3>
                  <p className='text-base py-1 text-[#222731]'>{project.description}</p>
                  <ul className='flex justify-center items-center flex-wrap'>
                    {project.technology_used && project.technology_used.map((tech, id) => (
                      <li key={id} className='m-2 px-2 rounded-lg bg-[#222731] text-white p-1 h-8'>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className='flex justify-evenly'>
                  <button className='bg-[#198FFF]  hover:text-[#] rounded-3xl px-3 m-1 p-1 w-[100px]'>Demo</button>
                  <button className='bg-[#198FFF]   rounded-3xl px-3 m-1 p-1 w-[100px]'>Source</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </>
  )
}

export default Projects
