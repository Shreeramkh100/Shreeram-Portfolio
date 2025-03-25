import React from 'react'
import experience from './Experience'
import { Element } from 'react-scroll'

function Experience() {
    console.log(Array.isArray(experience))
return (
    <> 
        <Element name="experience">
            <div id="experience"> 
                <h2 className='h-11 w-32 font-bold text-3xl lg:text-4xl lg:font-extrabold'>EXPERIENCE</h2>
                <ul className='flex justify-center items-center flex-wrap md:py-3'>

                    {experience && experience.map((company) => (
                        <li key={company.id} id={company.id} className='border-2 bg-white shadow-custom_shadow shadow-blue-500 flex items-center w-[343px] h-[200px] px-2 m-2 rounded-2xl lg:h-[220px] lg:w-[440px] lg:px-2 lg:py-2'>
                            <div className='h-32 w-32 m-3 flex justify-start lg:m-1 lg:justify-center'>
                                <img className='w-12 h-12' src={company.imageSrc} alt={`${company.organization} logo`} /> 
                            </div>
                            <div className='px-3 text-[#222731] lg:px-2'>
                                <h2 className='w-[230px] text-xl font-semibold lg:text-2xl text-[#198FFF]'>{company.role}, {company.organizantion}</h2>
                                <h3 className='text-sm font-thin'>{company.startDate} - {company.endDate}</h3>
                                <ul className='py-1 lg:text-lg'>
                                    {/* {company.activities && company.activities.map((activity, id) => (
                                        <li key={id}>{activity}</li>
                                    ))}  */}
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

