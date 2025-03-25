import './App.css'
import './index.css'
import Header from './components/Header/Header.jsx'
import Content from './components/Content/Content.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'
import Experience from './components/Experience/Experience.jsx'
import Popup from './components/Contact/Popup.jsx'
import React from 'react';
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

function App() {
  const PopupState = () => {
    setTriggerPopup(!triggerPopup);
  };

  const [triggerPopup, setTriggerPopup] = useState(false);

  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <div className='w-full h-auto overflow-hidden text-white bg-gradient-to-tr from-[#0a030f] via-[#15141a] to-[#06110a] sm:pb-5 md:pb-8 lg:pb-16'>
        <div className='lg:mx-auto xl:max-w-[1380px] 2xl:max-w-[1736px]'>
          <Header />
        </div>
        <div id="component" className="pb-5 md:pb-0 lg:mx-auto xl:mx-auto lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px]">
          <Content />
        </div>
        <div id="about" className='flex flex-col items-center justify-center py-4 md:py-10 my-5 mb-5 bg-[#3D4849] shadow-white rounded-xl lg:py-7 lg:m-2 lg:shadow-2xl mx-auto lg:mx-auto max-w-[350px] sm:max-w-[700px] lg:max-w-[824px] xl:max-w-[980px] 2xl:max-w-[1136px]'>
          <About />
        </div>
        <div className='flex flex-col justify-center pt-3 lg:flex-row-reverse lg:py-10 lg:mx-auto md:pt-0 lg:max-w-[924px] xl:max-w-[1080px] 2xl:max-w-[1236px]'>
            {/* <div id="experience_section" className='px-10 py-5 md:px-20 lg:px-10'>
            <Experience />
          </div>
         */}
        
          <div id="skills" className='px-10 py-5 md:px-20 lg:px-10'>
            <Skills />
         </div>  
          </div>
      
        <div id="projects" className='flex flex-col md:px-20 px-10 py-5 lg:pb-8 lg:mx-auto lg:max-w-[924px] xl:max-w-[1080px] 2xl:max-w-[1236px]'>
          <Projects />
        </div>
        <div id="contact" ref={ref} className={`hidden-element ${inView ? 'slide_contact_form' : ''} m-6 flex justify-center p-5 my-10 bg-[#3D4849] shadow-2xl shadow-[#3D4849] rounded-xl md:mx-auto md:max-w-[700px] xl:max-w-[800px]`}>
          <Contact setTriggerPopup={PopupState} />
        </div>
        {triggerPopup && <Popup setTriggerPopup={PopupState} />} 
      </div>
    </>
  );
}

export default App
