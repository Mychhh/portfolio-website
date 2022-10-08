import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Email = () => {
    
    const form = useRef();
    const [emailSent, setEmailSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p6ey2wf', 'template_m14tbfg', form.current, 'p5RqdtU-D5pgYAT16')
            .then((result) => {
                console.log(result.text);
                setEmailSent(true);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
            
    }

    //hide succesful messages
    setTimeout(() => {
        setEmailSent(false);
    }, 5000);

    return (
        <>
            <div className="w-full md:w-2/4"> 

                <div className='w-10/12 mx-auto '>   
                
                    <form ref={form} onSubmit={sendEmail} className='bg-gray-300 dark:bg-[#272829] dark:text-white rounded-lg h-full text-black p-10'>

                        <div className='flex flex-col gap-2 justify-start'>

                            <h1 className='text-lg font-medium'>Send a message</h1>

                            <div className='flex flex-col'>
                                <label className='text-lg font-light'>Name</label>
                                <input required type="text" name="name" className='rounded shadow-2xl h-10 p-5 focus:bg-gray-100 dark:text-black' />
                            </div>

                            <div className='flex flex-col'>
                                <labe className='text-lg font-light' >Email</labe>
                                <input required type="email" name="email" className='rounded shadow-2xl h-10 p-5 focus:bg-gray-100 dark:text-black' />
                            </div>

                            <div className='flex flex-col'>
                                <label className='text-lg font-light'>Message</label>
                                <textarea required name="message" className='rounded shadow-2xl p-5 focus:bg-gray-100 dark:text-black' />
                            </div>

                            <div className='flex flex-row gap-5 items-center'>
                                <button type="submit" value="Send" className='rounded bg-black px-5 py-2 text-white hover:scale-110 duration-200'>
                                    Send
                                </button>    
                                {emailSent && <p className='font-normal text-sm'>Your message has been sent!</p> }
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </>
    );
}

export default Email;