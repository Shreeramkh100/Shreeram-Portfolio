import React from 'react'
import skills from "./skills"
import { Element } from 'react-scroll'

function Skills() {
return (
    <>
        <Element name="skills">
            <div id="skills">
                <h2 className='h-11 w-32 font-bold text-3xl lg:text-4xl lg:font-extrabold'>SKILLS</h2>
                <ul id="skills_section" className='flex justify-center items-center flex-wrap md:py-3'>
                    {skills && skills.map((skill) => (
                        <li className='w-[110px] h-[163px] m-1 mx-2 flex flex-col justify-center items-center' key={skill.id} id={skill.id}>
                            <div className='bg-white shadow-custom_shadow shadow-blue-500 h-[95px] w-[95px] rounded-full flex justify-center items-center p-5 hover:animate-bounce ease-in-out delay-40'>
                                <img src={skill.imageSrc} className='' />
                            </div>
                            <p className='text-white flex justify-center p-2'>{skill.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Element>
    </>
)
}

export default Skills
