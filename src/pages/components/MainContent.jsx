import profile from '../../img/black-profile.jpg';

const MainContent = () => {
    return (
        <>
            {/* size */}
            <div className="w-10/12 h-5/6 mx-auto flex">

                {/* content */}
                <div className="grid grid-cols-5 grid-rows-2 justify-items-center items-center md:grid-rows-1 w-11/12 mx-auto">

                    {/* text */}
                    <div className="col-span-5 row-span-1 order-2 space-y-2 md:space-y-10 md:col-span-3 md:order-1 dark:text-white">
                        <h3 className='text-xs md:text-4xl font-light '>Welcome to my website</h3>
                        <div>
                            <h1 className='text-base md:text-4xl font-bold '>Hello, I'm Michael</h1>
                            <h1 className='text-base md:text-4xl font-bold '>Full Stack Web Developer</h1>
                        </div>
                        <p className='text-xs md:text-xl font-light '>I am a motivated Junior Web Developer that has an experience in developing projects that solves specific problem. I also like sharing stuff that I know.</p>
                        <div className='flex flex-row gap-3'>
                            <button className='text-xs bg-black px-4 py-1 text-white border border-1 border-black  hover:scale-110 duration-200 dark:bg-white dark:border-white dark:text-black md:text-lg md:px-8 md:py-2'>Reach me out</button>
                            
                            <button className='text-xs border border-1 border-black px-4 py-1 dark:border-white hover:scale-110 duration-200  md:text-lg md:px-8 md:py-2'>My Projects</button>
                        </div>
                    </div>
                    
                    {/* img */}
                    <div className="col-span-5 row-span-1 order-1 justify-self-center md:col-span-2 md:order-2 md:justify-self-end">
                        <div className='profile h-52 md:h-96 bg-black dark:bg-white'>
                            <img src={profile} alt="Profile" className='profile h-52 md:h-96 relative top-5 right-5'/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default MainContent;