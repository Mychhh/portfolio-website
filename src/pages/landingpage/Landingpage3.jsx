import Email from "../contact-components/Email";
import { Link } from "react-router-dom";

const Landingpage3 = () => {
    return ( 
        <>
            <div className="dark:bg-black px-0 md:px-10 py-10 mb-5 md:mb-10">
                <div className="w-full md:w-10/12 mx-auto flex flex-col md:flex-row gap-0 md:gap-10">

                    <div className="order-2 md:order-none flex items-center justify-center pt-10 w-full md:w-6/12">
                        <div className="flex flex-col gap-5 w-10/12 md:w-9/12">
                            <p className="dark:text-white text-sm md:text-lg font-light">if you want to know me more just click the button bellow to view all my contacts or just leave me a message here</p>
                            <Link to="/ContactPage">
                                <button className='text-xs bg-black px-4 py-1 text-white border border-1 border-black  hover:scale-110 duration-200 dark:bg-white dark:border-white dark:text-black md:text-lg md:px-8 md:py-2'>View all my contacts</button>
                            </Link>
                        </div>
                    </div>

                    <Email/>
                </div>
            </div>
        </>
    );
}
 
export default Landingpage3;