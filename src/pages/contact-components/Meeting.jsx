import Phone from '../../img/telephone.png';
import Gmail from '../../img/gmail.png';
import Schedule from '../../img/schedule.png';

const Meeting = () => {
    return (
        <>
            <div className="w-11/12 md:w-2/4 order-last md:order-first">
                {/* Phone email goes here */}

                <div className="flex flex-row justify-center gap-10 md:gap-20">
                    <div className="flex flex-row items-center gap-5">
                        <img src={Phone} alt="Phone" className='h-9 md:h-14' />
                        <h1 className='font-semibold text-lg md:text-3xl'>Phone</h1>
                    </div>

                    <div className="flex flex-row items-center gap-5">
                        <img src={Gmail} alt="Gmail" className='h-9 md:h-14' />
                        <h1 className='font-semibold text-lg md:text-3xl'>Email</h1>
                    </div>
                </div>

                {/* Book a Meeting goes here */}

                <div className='w-9/12 mx-auto flex justify-center mt-4 md:mt-8'>
                    <button className='px-3 py-3 md:px-10 md:py-5 w-full bg-black dark:bg-gray-300 rounded-lg hover:scale-110 duration-200'>
                        <div className='flex flex-row items-center justify-center gap-5 '>
                            <img src={Schedule} alt="meeting" className='h-9 md:h-14' />
                            <h1 className='font-semibold text-2xl md:text-4xl text-white dark:text-black'>Book a Meeting</h1>
                        </div>
                    </button>
                </div>

            </div>
        </>
    );
}

export default Meeting;