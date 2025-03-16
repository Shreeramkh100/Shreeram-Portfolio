import React from 'react'
import about_image from "./resources/about_cartoon.png"
import about from "./about.js"
import { Element } from 'react-scroll'

function About() {
return (
    <>
        <Element name="about">
            <div id="about" >
                <h2 className='h-11 w-32 font-bold text-3xl lg:text-4xl lg:font-extrabold flex justify-center'>ABOUT</h2>
                <div className='flex flex-col justify-center items-center md:flex-row'>
                    <div id="about_image" className="hidden xl:flex lg:justify-center items-center  xl:w-[400px] xl:h-[400px]">
                        <img className="rounded-full  xl:w-[360px] xl:h-[360px] xl:m-2" src={about_image} />
                    </div>
                    <ul id="about_info" className='flex flex-col items-center'>
                        {about.map((about_item) => (
                            <li className='flex items-center w-[320px] h-[170px] px-3 m-2 rounded-2xl bg-white shadow-custom_shadow shadow-blue-500 sm:w-[400px] sm:h-[150px] md:w-[500px] lg:w-[500px]' key={about_item.id} id={about_item.id}  >
                                <div className='h-32 w-32 px-1  flex justify-start  md:justify-center md:pt-3 lg:pt-6 lg:w-36 lg:h-36'>
                                    <img className='w-12 h-12 lg:w-14 lg:h-14' src={about_item.imgSource} />
                                </div>
                                <div className='px-3 lg:px-1'>
                                    <h2 className='w-[230px] text-2xl font-semibold pb-2 text-[#198FFF]'>{about_item.title}</h2>
                                    <p className='text-[#222731] text-xl'>{about_item.details}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Element>
    </>
)
}

export default About
