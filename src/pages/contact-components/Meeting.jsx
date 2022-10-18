import Phone from '../../img/telephone.png';
import Gmail from '../../img/gmail.png';
import Schedule from '../../img/schedule.png';
import Close from '../../img/close.png'
const Meeting = () => {

    return (
        <>
            <div className="w-11/12 md:w-2/4 order-last md:order-first mb-5 md:mb-20">
                
                {/* Phone email goes here */}
                <div className="flex flex-row justify-center gap-3 md:gap-10 md:pt-20 relative">

                    <div className='flex flex-col justify-center items-center gap-3'>
                        <div className="flex flex-row items-center gap-5">
                            <img src={Phone} alt="Phone" className='h-7 md:h-10' />
                            <h1 className='font-semibold text-lg md:text-2xl'>Phone</h1>
                        </div>
                        <div>
                            <p className='text-xs'>+63-965-710-7290</p>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-3'>
                        <div className="flex flex-row items-center gap-5">
                            <img src={Gmail} alt="Gmail" className='h-7 md:h-10' />
                            <h1 className='font-semibold text-lg md:text-2xl'>Email</h1>
                        </div>
                        <div>
                            <p className='text-xs'>michaeldrpabaya@gmail.com</p>
                        </div>
                    </div>
                    
                </div>

                {/* Book a Meeting goes here */}
                <a href='https://calendly.com/michaeldrpabaya/30min' target="_blank" className='w-full md:w-4/6 mx-auto flex justify-center mt-4 md:mt-8'>
                    <button className='px-3 py-3 md:px-4 md:py-5 w-full bg-black dark:bg-gray-300 rounded-lg hover:scale-110 duration-200'>
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