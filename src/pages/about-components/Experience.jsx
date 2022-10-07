import Dot from '../../img/new-moon.png'

const Experience = () => {
    return (
        <>
            <p className="text-base md:text-4xl font-bold py-5">Experience</p>

            <div className='flex flex-col justify-center items-center'>

                {/* <div className="flex justify-start pr-auto">

                    <div className='w-4/12 bg-gray-500 rounded'>
                        <p className='p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, excepturi?</p>
                    </div>

                    <div className='relative bottom-2.5'>
                        <div className='border-b border-b-black w-20'>2020</div>
                    </div>

                    <div >
                        <img src={Dot} alt="dot" className='h-7 w-7' />
                    </div>

                    <div className='block border-r border-r-2 border-r-black h-32'></div>

                </div>

                <div className='flex justify-start pl-auto'>

                    <div >
                        <img src={Dot} alt="dot" className='h-7 w-7' />
                    </div>

                    <div className='relative bottom-2.5'>
                        <div className='border-b border-b-black w-20'>2020</div>
                    </div>

                    <div className='w-4/12 bg-gray-500 rounded'>
                        <p className='p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, excepturi?</p>
                    </div>
                </div> */}     

                <div className='flex flex-col justify-center w-10/12 relative top-3'>
                    <div className='flex flex-col text-start bg-gray-300 dark:bg-[#272829] rounded drop-shadow-lg p-5 gap-2.5'>
                        <h1 className='text-2xl font-bold'>Student</h1>
                        <h3 className='text-md font-normal'>KodeGo Bootcamp <span className='text-md font-extralight'>(May-2022 | September-2022)</span></h3>
                        <p className='text-md font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem amet repellendus facilis provident repellat totam ipsa iste? Sint, aspernatur.</p>
                    </div>

                    <div className='flex flex-col items-center relative'>
                        <img src={Dot} alt="dot" className='h-7 w-7 relative bottom-3' />
                        <div className='border-l border-l-2 border-l-black dark:border-l-white h-14 relative bottom-3'></div>
                    </div>
                </div>
                           
                <div className='flex flex-col justify-center w-10/12'>
                    <div className='flex flex-col text-start bg-gray-300 dark:bg-[#272829] rounded drop-shadow-lg p-5 gap-2.5'>
                        <h1 className='text-2xl font-bold'>Student</h1>
                        <h3 className='text-md font-normal'>STI College Balagtas <span className='text-md font-extralight'>(June-2020 | March-2024)</span></h3>
                        <p className='text-md font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem amet repellendus facilis provident repellat totam ipsa iste? Sint, aspernatur.</p>
                    </div>

                    <div className='flex flex-col items-center relative'>
                        <img src={Dot} alt="dot" className='h-7 w-7 relative bottom-3' />
                        <div className='border-l border-l-2 border-l-black dark:border-l-white h-14 relative bottom-3'></div>
                    </div>
                </div>
                
                <div className='flex flex-col justify-center w-10/12 relative bottom-3'>
                    <div className='flex flex-col text-start bg-gray-300 dark:bg-[#272829] rounded drop-shadow-lg p-5 gap-2.5'>
                        <h1 className='text-2xl font-bold'>Intern</h1>
                        <h3 className='text-md font-normal'>Amaris PC Laptop Solution <span className='text-md font-extralight'>(September-2019 | December-2019)</span></h3>
                        <p className='text-md font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem amet repellendus facilis provident repellat totam ipsa iste? Sint, aspernatur.</p>
                    </div>

                    <div className='flex flex-col items-center relative'>
                        <img src={Dot} alt="dot" className='h-7 w-7 relative bottom-3' />
                        <div className='border-l border-l-2 border-l-black dark:border-l-white h-14 relative bottom-3'></div>
                    </div>
                </div>

                <div className='flex flex-col justify-center w-10/12 relative bottom-6'>
                    <div className='flex flex-col text-start bg-gray-300 dark:bg-[#272829] rounded drop-shadow-lg p-5 gap-2.5'>
                        <h1 className='text-2xl font-bold'>Student</h1>
                        <h3 className='text-md font-normal'>Balagtas National Agricultural High School <span className='text-md font-extralight'>(June-2018 | March-2020)</span></h3>
                        <p className='text-md font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem amet repellendus facilis provident repellat totam ipsa iste? Sint, aspernatur.</p>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Experience;