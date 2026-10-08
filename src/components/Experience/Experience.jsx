import React from 'react'
import experience from './experience'
import { Element } from 'react-scroll'

function Experience() {
return (
    <> 
        <Element name="experience">
            <div id="experience"> 
                <h2 className='h-11 w-32 font-bold text-3xl lg:text-4xl lg:font-extrabold'>EXPERIENCE</h2>
                <ul className='flex justify-center items-center flex-wrap md:py-3'>
                    {experience && experience.map((company) => (
                        <li key={company.id} id={company.id} className='border-2 bg-white shadow-custom_shadow shadow-blue-500 flex items-center w-[343px] h-[350px] px-2 m-2 rounded-2xl lg:h-[290px] lg:w-[440px] lg:px-4 lg:py-4'>
                            <div className='px-3 text-[#222731] lg:px-2'>
                                <h2 className='text-xl font-semibold lg:text-2xl text-[#198FFF]'> {company.organization}</h2>
                                <h3 className='font-semibold lg:text-base text-[#2563A8]'> {company.role}</h3>
                                <h3 className='text-sm font-thin'>{company.startDate} - {company.endDate}</h3>
                                <ul className='py-1  pl-5 lg:text-base list-disc space-y-2 text-[#222731]'>
                                    {company.activities && company.activities.map((activity, id) => (
                                        <li key={id}>{activity}</li>
                                    ))} 
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div> 
        </Element> 
    </>
)}

export default Experience

