import Dot from '../../img/new-moon.png'

const Experience = () => {
    
    // Change the Image into shape

    return (
        <>
            <div className='w-10/12 mx-auto  my-5 '>
                <p className="text-base font-bold text-2xl border-b-solid border-b border-b-black inline">Experience</p>
            </div>

            <div className='flex flex-col justify-center items-center'>

                <div className='flex flex-col justify-center w-10/12 relative top-3'>
                    <div className='flex flex-col text-start bg-gray-300 dark:bg-[#272829] rounded drop-shadow-lg p-5 gap-2.5'>
                        <h1 className='text-2xl font-bold'>Student</h1>
                        <h3 className='font-medium'>KodeGo Bootcamp <span className='font-extralight'>(May-2022 | September-2022)</span></h3>
                        <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem amet repellendus facilis provident repellat totam ipsa iste? Sint, aspernatur.</p>
                    </div>

                    <div className='flex flex-col items-center relative'>
                        <img src={Dot} alt="dot" className='h-7 w-7 relative bottom-3' />
                        <div className='border-l border-l-2 border-l-black dark:border-l-white h-14 relative bottom-3'></div>
                    </div>
                </div>
                           
                <div className='flex flex-col justify-center w-10/12'>
                    <div className='flex flex-col text-start bg-gray-300 dark:bg-[#272829] rounded drop-shadow-lg p-5 gap-2.5'>
                        <h1 className='text-2xl font-bold'>Student</h1>
                        <h3 className='font-medium'>STI College Balagtas <span className='font-extralight'>(June-2020 | Present)</span></h3>
                        <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem amet repellendus facilis provident repellat totam ipsa iste? Sint, aspernatur.</p>
                    </div>

                    <div className='flex flex-col items-center relative'>
                        <img src={Dot} alt="dot" className='h-7 w-7 relative bottom-3' />
                        <div className='border-l border-l-2 border-l-black dark:border-l-white h-14 relative bottom-3'></div>
                    </div>
                </div>
                
                <div className='flex flex-col justify-center w-10/12 relative bottom-3'>
                    <div className='flex flex-col text-start bg-gray-300 dark:bg-[#272829] rounded drop-shadow-lg p-5 gap-2.5'>
                        <h1 className='text-2xl font-bold'>Technician</h1>
                        <h3 className='font-medium'>Self Employed <span className='font-extralight'>(January-2020 | February-2020)</span></h3>
                        <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem amet repellendus facilis provident repellat totam ipsa iste? Sint, aspernatur.</p>
                    </div>

                    <div className='flex flex-col items-center relative'>
                        <img src={Dot} alt="dot" className='h-7 w-7 relative bottom-3' />
                        <div className='border-l border-l-2 border-l-black dark:border-l-white h-14 relative bottom-3'></div>
                    </div>
                </div>

                <div className='flex flex-col justify-center w-10/12 relative bottom-6'>
                    <div className='flex flex-col text-start bg-gray-300 dark:bg-[#272829] rounded drop-shadow-lg p-5 gap-2.5'>
                        <h1 className='text-2xl font-bold'>Intern</h1>
                        <h3 className='font-medium'>Amaris PC Laptop Solution <span className='font-extralight'>(September-2019 | December-2019)</span></h3>
                        <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem amet repellendus facilis provident repellat totam ipsa iste? Sint, aspernatur.</p>
                    </div>

                    <div className='flex flex-col items-center relative'>
                        <img src={Dot} alt="dot" className='h-7 w-7 relative bottom-3' />
                        <div className='border-l border-l-2 border-l-black dark:border-l-white h-14 relative bottom-3'></div>
                    </div>
                </div>

                <div className='flex flex-col justify-center w-10/12 relative bottom-9'>
                    <div className='flex flex-col text-start bg-gray-300 dark:bg-[#272829] rounded drop-shadow-lg p-5 gap-2.5'>
                        <h1 className='text-2xl font-bold'>Student</h1>
                        <h3 className='font-medium'>Balagtas National Agricultural High School <span className='font-extralight'>(June-2018 | March-2020)</span></h3>
                        <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem amet repellendus facilis provident repellat totam ipsa iste? Sint, aspernatur.</p>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Experience;