import emailjs from '@emailjs/browser';
import Close from '../../img/close.webp'
import { useRef, useState } from 'react';

const Email = () => {
    
    const form = useRef();
    const [emailSent, setEmailSent] = useState(false);
    const [sending, setSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);

        emailjs.sendForm('service_p6ey2wf', 'template_m14tbfg', form.current, 'p5RqdtU-D5pgYAT16')
            .then((result) => {
                console.log(result.text);
                setEmailSent(true);
                setSending(false);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
            
    }

    //hide succesful messages
    setTimeout(() => {
        setEmailSent(false);
    }, 5000);

    const [isClose, setIsClose] = useState(false);

    const handleMessage = () => {
        setIsClose(!isClose);
    }


    return (
        <>
            {/* sending */}
            {sending && 
            <div className='flex items-center justify-center w-full h-full fixed top-0 left-0 z-10'>
                <p className='bg-black text-white dark:bg-white dark:text-black px-20 py-10 rounded font-medium text-4xl mb-20 border border-white dark:border-black shadow-lg'>Sending...</p> 
            </div> 
            }

            <div className="w-full md:w-2/4"> 

                <div className='w-11/12 mx-auto '>   
                
                    <form ref={form} onSubmit={sendEmail} className='bg-gray-300 dark:bg-[#272829] dark:text-white rounded h-full text-black p-5 md:p-10 drop-shadow-xl'>

                        <div className='flex flex-col gap-2 justify-start'>

                            <h1 className='text-md md:text-lg font-medium '>Send a message</h1>

                            <div className='flex flex-col'>
                                <label className='text-sm md:text-lg font-light '>Name</label>
                                <input required type="text" name="name" className='rounded shadow-2xl h-10 p-5 focus:bg-gray-100 dark:text-black' />
                            </div>

                            <div className='flex flex-col'>
                                <labe className='text-sm md:text-lg font-light ' >Email</labe>
                                <input required type="email" name="email" className='rounded shadow-2xl h-10 p-5 focus:bg-gray-100 dark:text-black' />
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-sm md:text-lg font-light '>Message</label>
                                <textarea required name="message" className='rounded shadow-2xl p-5 focus:bg-gray-100 dark:text-black' />
                            </div>
                            
                            <div className='flex flex-row gap-5 items-center'>
                                <button type="submit" value="Send" className='rounded bg-black px-5 py-2 text-sm md:text-lg text-white hover:scale-110 duration-200'>
                                    Send
                                </button>    
                                {emailSent && <p className='font-normal text-sm'>Your message has been sent!</p> }
                                {/* {emailSent &&
                                    <div className='flex items-center justify-center fixed top-0 w-full h-screen absolute top-0 left-0'>
                                        <div className='flex bg-black dark:bg-gray-300 p-5 md:p-10 w-10/12 mx-auto md:w-auto justify-center relative'>
                                            <p className='message-content text-white dark:text-black md:text-lg px-0 md:px-5'>Your message has been sent!</p>
                                            <button className='absolute top-2.5 right-2.5'
                                                    onClick={handleMessage}>
                                                <img src={Close} alt="close button"className='h-3'/>
                                            </button>
                                        </div>
                                    </div>
                                    } */}
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </>
    );
}

export default Email;