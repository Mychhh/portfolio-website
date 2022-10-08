// import linkedin from '../../img/linkedin-logo.png';
// import instagram from '../../img/instagram-logo.png';
// import facebook from '../../img/facebook-logo.png';
// import tiktok from '../../img/tiktok-logo.png';
import sun from '../../img/sun.png';
import moon from '../../img/moon.png';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

    let [icon, setIcon] = useState(sun);

    const handleTheme = () => {
        if (icon === sun) {
            document.documentElement.classList.add('dark')
            setIcon(icon = moon)
        } else {
            document.documentElement.classList.remove('dark')
            setIcon(icon = sun)
        }
    }

    const ActiveNav = ({ isActive }) => {
        return {
            borderBottom: isActive ? '1px solid gray' : 'none'
        }
    }

    return (
        <>
            <div className='py-8 w-10/12 mx-auto'>
                <div className="flex flex-row bg-transparent justify-between items-center p-0 md:p-3">
                    {/*logo goes here*/}
                    <div className="text-4xl font-bold dark:text-white">
                        <NavLink to="/">Logo</NavLink>
                    </div>

                    {/* main content goes here */}
                    <div className="flex flex-row gap-5 text-base font-medium hidden dark:text-white md:flex">
                        <NavLink to="/AboutPage" style={ActiveNav} className='hover:scale-110 duration-200 px-1'>About</NavLink>
                        <NavLink to="/SkillsPage" style={ActiveNav} className='hover:scale-110 duration-200 px-1'>Skills</NavLink>
                        <NavLink to="/ProjectPage" style={ActiveNav} className='hover:scale-110 duration-200 px-1'>Projects</NavLink>
                        <NavLink to="/ContactPage" style={ActiveNav} className='hover:scale-110 duration-200 px-1'>Contacts</NavLink>
                    </div>

                    {/* side content goes here */}
                    <div className="flex flex-row gap-2 text-sm">
                        {/* <a href="#"><img src={linkedin} alt="faceboook-logo" className='h-6 hover:scale-110 duration-200' /></a>
                        <a href="#"><img src={instagram} alt="faceboook-logo" className='h-6 hover:scale-110 duration-200' /></a>
                        <a href="#"><img src={facebook} alt="faceboook-logo" className='h-6 hover:scale-110 duration-200' /></a>
                        <a href="#"><img src={tiktok} alt="faceboook-logo" className='h-6 hover:scale-110 duration-200' /></a> */}
                        <button><img src={icon} alt="faceboook-logo" className='h-6 hover:scale-110 duration-200 duration-200' onClick={handleTheme} /></button>
                    </div>
                </div>
                {/* main content goes here */}
                <div className="flex flex-row gap-3 md:gap-7 justify-center text-base font-medium flex md:hidden p-3 dark:text-white">
                    <NavLink to="/AboutPage" style={ActiveNav} className='hover:scale-110 duration-200 px-1'>About</NavLink>
                    <NavLink to="/SkillsPage" style={ActiveNav} className='hover:scale-110 duration-200 px-1'>Skills</NavLink>
                    <NavLink to="/ProjectPage" style={ActiveNav} className='hover:scale-110 duration-200 px-1'>Projects</NavLink>
                    <NavLink to="/ContactPage" style={ActiveNav} className='hover:scale-110 duration-200 px-1'>Contacts</NavLink>
                </div>
            </div>
        </>
    );
}

export default Navbar;