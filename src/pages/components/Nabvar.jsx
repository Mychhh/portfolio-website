import linkedin from '../../img/linkedin-logo.png';
import instagram from '../../img/instagram-logo.png';
import facebook from '../../img/facebook-logo.png';
import tiktok from '../../img/tiktok-logo.png';
import sun from '../../img/sun.png';
import moon from '../../img/moon.png';
import { useEffect, useState } from 'react';

const Navbar = () => {

    let [icon, setIcon] = useState(sun);

    const handleTheme = () => {
        if(icon === sun){
            document.documentElement.classList.add('dark')
            setIcon( icon = moon)
        }else{
            document.documentElement.classList.remove('dark')
            setIcon( icon = sun)
        }
        
    }


    return (
        <>
            <div className='py-8 w-10/12 mx-auto'>
                <div className="flex flex-row bg-transparent justify-between items-center p-0 md:p-3">
                    {/*logo goes here*/}
                    <div className="text-4xl font-bold dark:text-white">
                        <h1>Logo</h1>
                    </div>

                    {/* main content goes here */}
                    <div className="flex flex-row gap-7 text-base font-medium hidden dark:text-white md:flex">
                        <h1 className='hover:scale-110 duration-200'>About</h1>
                        <h1 className='hover:scale-110 duration-200'>Skills</h1>
                        <h1 className='hover:scale-110 duration-200'>Projects</h1>
                        <h1 className='hover:scale-110 duration-200'>Contacts</h1>
                    </div>

                    {/* side content goes here */}
                    <div className="flex flex-row gap-2 text-sm">
                        <img src={linkedin} alt="faceboook-logo" className='h-6 hover:scale-110 duration-200' />
                        <img src={instagram} alt="faceboook-logo" className='h-6 hover:scale-110 duration-200' />
                        <img src={facebook} alt="faceboook-logo" className='h-6 hover:scale-110 duration-200' />
                        <img src={tiktok} alt="faceboook-logo" className='h-6 hover:scale-110 duration-200' />
                        <img src={icon} alt="faceboook-logo" className='h-6 hover:scale-110 duration-200' onClick={handleTheme}/>
                    </div>
                </div>
                {/* main content goes here */}
                <div className="flex flex-row gap-3 md:gap-7 justify-center text-base font-medium flex md:hidden p-3">
                    <h1 className='hover:scale-110 duration-200'>About</h1>
                    <h1 className='hover:scale-110 duration-200'>Skills</h1>
                    <h1 className='hover:scale-110 duration-200'>Projects</h1>
                    <h1 className='hover:scale-110 duration-200'>Contacts</h1>
                </div>
            </div>
        </>
    );
}

export default Navbar;