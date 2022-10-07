import HTML from '../../img/HTML.png'
import CSS from '../../img/CSS.png'
import JS from '../../img/JS.png'

const OtherTools = () => {
    return (
        <>
            <div className="w-10/12 mx-auto py-5 dark:text-white">

                <div className='border-b border-1 border-b-black dark:border-b-white inline-block m-5'>
                    <h1 className='font-bold text-xl px-2'>Other Tools</h1>
                </div>

                {/* Stacks */}
                <div className='flex flex-col gap-y-5'>
                    <div className="flex flex-row dark:text-white gap-x-5">

                        <div className="flex flex-row items-center w-1/4 bg-gray-300 dark:bg-[#272829]">
                            <div className='flex justify-center w-2/4'>
                                <img src={HTML} alt="programing-language" className='h-16 p-1 rounded-full' />
                            </div>
                            <div className='flex justify-start w-2/4'>
                                <p className="text-base font-semibold">HTML</p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center w-1/4 bg-gray-300 dark:bg-[#272829]">
                            <div className='flex justify-center w-2/4'>
                                <img src={CSS} alt="programing-language" className='h-16 p-1 rounded-full' />
                            </div>
                            <div className='flex justify-start w-2/4'>
                                <p className="text-base font-semibold">CSS</p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center w-1/4 bg-gray-300 dark:bg-[#272829]">
                            <div className='flex justify-center w-2/4'>
                                <img src={JS} alt="programing-language" className='h-16 p-1 rounded-full' />
                            </div>
                            <div className='flex justify-start w-2/4'>
                                <p className="text-base font-semibold">JavaScript</p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center w-1/4 bg-gray-300 dark:bg-[#272829]">
                            <div className='flex justify-center w-2/4'>
                                <img src={CSS} alt="programing-language" className='h-16 p-1 rounded-full' />
                            </div>
                            <div className='flex justify-start w-2/4'>
                                <p className="text-base font-semibold">CSS</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default OtherTools;