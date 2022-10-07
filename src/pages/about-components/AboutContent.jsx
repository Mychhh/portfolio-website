import Experience from './Experience';
import Certifications from './Certifications';

const AboutContent = () => {
    return (
        <>
            <div className="w-10/12 mx-auto py-5">
                <div className="grid grid-cols-6 dark:text-white">

                    <div className="col-span-6 md:col-span-2 text-center border-t border-t-1 border-t-black dark:border-t-white md:border-t-0 md:border-r md:border-r-1 md:border-r-black dark:md:border-r-white order-2 md:order-1">
                        <Certifications/>
                    </div>

                    <div className="col-span-6 md:col-span-4 text-center order-1">
                        <Experience/>
                    </div>

                </div>
            </div>
        </>
    );
}

export default AboutContent;