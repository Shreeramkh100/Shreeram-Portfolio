import React from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";

function Popup({setTriggerPopup}) {
  return (
    <div
id="success_popup"
  className="fixed inset-0 flex items-center justify-center z-50 ">
  <div className="absolute flex items-center justify-center inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg">
  
  <div className="relative p-3 m-6 py-3 w-[400px] h-[140px] bg-white shadow-lg text-black rounded-md">
  <div className=' flex justify-end items-center h-[30px]'>
     <IoCloseCircleSharp className='h-7 w-7'  onClick={()=>setTriggerPopup()}/>
    </div>
    <div className='flex justify-center items-center bg-slate-400 mx-4 mt-2 mb-4 p-2 rounded-md shadow-lg'>
    <h3 className=''>Message Sent, We will get back to you shortly!</h3>
    </div>
    
  </div>
  </div>
</div>



  )
}

export default Popup
