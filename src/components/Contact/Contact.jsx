import React from 'react'
import emailjs from '@emailjs/browser';
import { useState, useRef, useEffect } from 'react'
import contact from "./contact"
import { Element } from 'react-scroll'
import contactImg from './resources/contact-img.png'
import { FaArrowRight } from 'react-icons/fa';
import '../../../src/App.css'
import '../../../src/index.css'

function Contact({ setTriggerPopup }) {
    const SERVICE_ID=import.meta.env.VITE_SERVICE_ID
    const TEMPLATE_ID=import.meta.env.VITE_TEMPLATE_ID
    const PUBLIC_KEY=import.meta.env.VITE_PUBLIC_KEY

    const [message, setMessage] = useState({ user_name: '', user_email: '', user_phone: '', message: '' })
    const [showErrorMsg, setShowErrorMsg] = useState(false)
    const [error, setError] = useState({})
    const [isMoving, setIsMoving] = useState(false);
    const form = useRef();

    const handleMessagedata = (e) => {
        const { name, value } = e.target
        setMessage((prevdata) => ({ ...prevdata, [name]: value }))
    }

    const validateData = () => {
        const err = UpdateErrorMessage()
        return err.user_name || err.user_email || err.user_phone || err.message ? false : true
    }

    const UpdateErrorMessage = () => {
        const err = {}
        if (!message.user_name || message.user_name.length < 4) {
                err.user_name = 'Name should be at least 4 characters'
        }
        if (!message.user_email || message.user_email.length < 6) {
                err.user_email = 'Enter valid Email Address'
        }
        if (!message.user_phone || message.user_phone.length < 8) {
                err.user_phone = 'Enter valid Phone Number'
        }
        if (!message.message || message.message.length < 2) {
                err.message = 'Enter valid Messsage'
        }
        setError(err)
        return err;
    }

    useEffect(() => {
        if (showErrorMsg) {
        UpdateErrorMessage()
        }
    }, [message, showErrorMsg])

    const sendEmail = (e) => {
        e.preventDefault();
        setShowErrorMsg(true);
        if (message.user_name !== "" && message.user_email !== "" && message.user_phone !== "" && message.message !== "") {
            if (validateData()) {
                setIsMoving(true);
                setTimeout(() => setIsMoving(false), 500); // Reset animation after it completes
               

                // Emailjs
                emailjs.sendForm(`${SERVICE_ID}`,`${TEMPLATE_ID}`, form.current, {
                    publicKey:`${PUBLIC_KEY}`,
                  })
                  .then(
                    () => {
                        // Time for Animation 
                        setTimeout(() => {
                            setTriggerPopup();
                            setMessage({ user_name: '', user_email: '', user_phone: '', message: '' });
                            setShowErrorMsg(false);
                        }, 1500);
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        alert('We encountered an issue while trying to send your message')
                        console.log('FAILED...', error.text);
                    },
                  );
            }
        }
    };

    return (
        <Element name="contact">
            <div id="contact">
                <div id="contact_section" className='px-10 py-5 md:px-20 lg:px-5'>
                    <h2 className='font-bold text-3xl lg:text-4xl lg:font-extrabold py-4'>Let's work Together</h2>
                    <div className='flex'>
                        <div id="contact-image" className='hidden md:block m-4'>
                            <img src={contactImg} className='w-[450px]' />
                        </div>
                        <div id="contact-form">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className='py-2 px-3 flex flex-col justify-center'>
                                    {contact.map((cont, id) => (
                                        <span key={id} className='py-2'>
                                            <input
                                                type={cont.type}
                                                placeholder={cont.field}
                                                name={cont.name}
                                                value={message[cont.name]}
                                                onChange={handleMessagedata}
                                                className={`${cont.type=='number' ? 'no-arrows':''} bg-transparent h-8 w-60 lg:h-10 lg:w-80 px-3 placeholder-white bg-white shadow-md shadow-[#222731] bg-opacity-10 placeholder-opacity-60 rounded-md `}
                                            />
                                            {error[cont.name] && <p className='text-red-500'>{error[cont.name]}</p>}
                                        </span>
                                    ))}
                                    <span className='py-2'>
                                        <textarea
                                            type="text"
                                            placeholder='Message'
                                            name="message"
                                            value={message.message}
                                            onChange={handleMessagedata}
                                            className='bg-transparent h-auto lg:w-80 px-3 placeholder-white bg-white shadow-md shadow-[#222731] bg-opacity-10 placeholder-opacity-60 rounded-md w-60'
                                        />
                                        {error.message && <p className='text-red-500'>{error.message}</p>}
                                    </span>
                                    <div className='flex flex-col justify-center py-4'>
                                        <button
                                            type="submit"
                                            className='flex justify-center items-center bg-white text-[#198FFF] h-8 w-28 lg:h-12 rounded-lg font-bold text-md hover:bg-[#198FFF] hover:text-white shadow-inset-md'
                                        >
                                            Send
                                            <FaArrowRight className={`h-[20px] w-[20px] ml-2 ${isMoving ? 'move-right' : ''}`} />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Contact
