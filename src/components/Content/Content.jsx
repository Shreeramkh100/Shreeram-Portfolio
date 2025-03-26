import React from "react";
import shreeram from "./resources/boy2.png";
import NameEffect from "./NameEffect.jsx";
import resume from "./resources/Shreeram_Resume.pdf";
import { HiInboxArrowDown } from "react-icons/hi2";
import content from "./content.js";
import '../../../src/App.css'

const DownloadResume = () => {
      const link = document.createElement('a');
      link.href = resume;
      link.download = 'Shreeram_Resume.docx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
}

function Content() {
  return (
    <div className="flex flex-col lg:flex-row-reverse md:px-10 lg:px-10 xl:px:5 lg:py-10 lg:justify-center">
      <div className="flex justify-center items-center  lg:w-[400px] lg:h-[400px] p-6 ">
        <img
          className=" w-60 h-60 p-4 lg:min-w-72 lg:min-h-72 rounded-full shake-effect animate-shakeEffect md:p-3"
          src={shreeram}
        />
      </div>
      <div className="flex flex-col justify-center items-center md:items-start  ">
        <div className="flex flex-col justify-center items-center md:items-start px-8 md:px-7 xl:w-[700px]">
          <span className="flex justify-start py-3">
            <NameEffect />
          </span>
          <h2 className="text-xl md:py-4">
            {"I'm a Creative and efficient React JS developer specializing "}
            {"in crafting dynamic, user-centric front-end experiences."}
            {" Reach out if you'd like to learn more!"}
          </h2>
        </div>
        <div id="contact-icons" className="flex justify-center items-center pt-5 md:px-5 lg:px-7">
          {
            content && content.map((item)=>(
              <span id={item.id} key={item.id} className=" h-40px px-4 ">
                <a href={item.href} target="_blank">{<item.image className="w-[30px] h-[30px] bg-white text-black p-1 rounded-lg hover:bg-[#198FFF] hover:animate-pulse"/>}</a>
              </span>
            ))
          }
        </div>
        <button className="flex items-center justify-center my-7 w-[220px] h-[50px] md:w-[270px] md:h-[55px] bg-[#198FFF] rounded-[100px] text xl md:text-2xl  px-2 md:py-5 md:my-9 md:ml-10 shadow-inset-lg slide-in-left animate-slideInFromLeft " onClick={DownloadResume}>
          Download Resume 
          <HiInboxArrowDown className="m-2"/>
        </button>
      </div>
    </div>
  );
}

export default Content;
