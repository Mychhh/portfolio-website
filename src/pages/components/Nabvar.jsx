import linkedin from '../../img/linkedin-logo.png';
import instagram from '../../img/instagram-logo.png';
import facebook from '../../img/facebook-logo.png';
import tiktok from '../../img/tiktok-logo.png';


const Navbar = () => {
    return (
        <>
            <div className='py-8 w-10/12 mx-auto'>
                <div className="flex flex-row bg-transparent justify-between items-center p-0 md:p-3">
                    {/*logo goes here*/}
                    <div className="text-4xl font-bold">
                        <h1>Logo</h1>
                    </div>

                    {/* main content goes here */}
                    <div className="flex flex-row gap-7 text-base font-medium hidden md:flex">
                        <h1>About</h1>
                        <h1>Skills</h1>
                        <h1>Projects</h1>
                        <h1>Contacts</h1>
                    </div>

                    {/* side content goes here */}
                    <div className="flex flex-row gap-2 text-sm">
                        <img src={linkedin} alt="faceboook-logo" className='h-6' />
                        <img src={instagram} alt="faceboook-logo" className='h-6' />
                        <img src={facebook} alt="faceboook-logo" className='h-6' />
                        <img src={tiktok} alt="faceboook-logo" className='h-6' />
                        <p>sun</p>
                    </div>
                </div>
                {/* main content goes here */}
                <div className="flex flex-row gap-3 md:gap-7 justify-center text-base font-medium flex md:hidden p-3">
                    <h1>About</h1>
                    <h1>Skills</h1>
                    <h1>Projects</h1>
                    <h1>Contacts</h1>
                </div>
            </div>
        </>
    );
}

export default Navbar;