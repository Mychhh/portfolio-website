import Phone from '../../img/telephone.png';
import Gmail from '../../img/gmail.png';
import Schedule from '../../img/schedule.png';
import Close from '../../img/close.png'
import { useState } from 'react';
const Meeting = () => {

    const [isClose, setIsClose] = useState(false);
    const [messageContent, setMessageContent] = useState('');

    const handleMessage = () => {
        setIsClose(!isClose);
    }

    const handleNumber = () =>{
        
        setIsClose(true);
        setMessageContent('09657107290');
    }
    const handleEmail = () =>{
        setIsClose(true);
        setMessageContent('michaeldrpabaya@gmail.com');
    }
    return (
        <>
            <div className="w-11/12 md:w-2/4 order-last md:order-first mb-5 md:mb-20">
                
                {/* Phone email goes here */}
                <div className="flex flex-row justify-center gap-10 md:gap-20 pt-14 md:pt-20 relative">
                    
                    {isClose &&
                    <div className='absolute top-0'>
                        <div className='flex bg-gray-300 dark:bg-[#272829] rounded p-5 pb-3 w-full md:w-10/12 mx-auto md:w-auto justify-center relative'>
                            <p className='message-content text-black dark:text-white md:text-lg px-0 md:px-5'>{messageContent}</p>
                            <button className='absolute top-2 right-2'
                                    onClick={handleMessage}>
                                <img src={Close} alt="close button"className='h-5'/>
                            </button>
                        </div>
                    </div>
                    }

                    <button className="flex flex-row items-center gap-5"
                            onClick={() =>{
                                handleMessage();
                                handleNumber();
                            }}>
                        <img src={Phone} alt="Phone" className='h-7 md:h-10' />
                        <h1 className='font-semibold text-lg md:text-2xl hover:border-b hover:border-b-black'>Phone</h1>
                    </button>

                    <button className="flex flex-row items-center gap-5"
                            onClick={() => {
                                handleMessage();
                                handleEmail();
                            }}>
                        <img src={Gmail} alt="Gmail" className='h-7 md:h-10' />
                        <h1 className='font-semibold text-lg md:text-2xl hover:border-b hover:border-b-black'>Email</h1>
                    </button>
                </div>

                {/* Book a Meeting goes here */}

                <a href='https://calendly.com/michaeldrpabaya/30min' target="_blank" className='w-3/4 mx-auto flex justify-center mt-4 md:mt-8'>
                    <button className='px-3 py-3 md:px-5 md:py-5 w-full bg-black dark:bg-gray-300 rounded-lg hover:scale-110 duration-200'>
                        <div className='flex flex-row items-center justify-center gap-2 md:gap-5'>
                            <img src={Schedule} alt="meeting" className='h-7 md:h-12' />
                            <h1 className='font-semibold text-xl md:text-3xl text-white dark:text-black '>Book a Meeting</h1>
                        </div>
                    </button>
                </a>

            </div>
        </>
    );
}

export default Meeting;