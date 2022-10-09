import Socials from "./Socials";

const Footer = () => {
    return ( 
        <div className="dark:bg-[#121212]">
            <div className='pb-4 md:pb-8 w-10/12 mx-auto border-t border-black dark:border-white'>
                <div className="p-3 text-black text-sm font-medium  flex flex-col items-center gap-3 md:text-lg md:flex-row md:justify-between dark:text-white">

                    <div>Michael Pabaya.</div>

                    <div><Socials/></div>

                </div>
            </div>
        </div>    
    );
}
 
export default Footer;