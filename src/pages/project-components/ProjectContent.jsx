import Img1 from '../../img/1.jpg'
import Img2 from '../../img/2.jpg'


const ProjectContent = () => {
    return ( 
        <>
        
            <div className="w-10/12 mx-auto py-5 dark:text-white mt-10">
                <div className="grid grid-cols-10 gap-10 justify-center relative">

                    <div className="theproject col-span-10 md:col-span-5 w-full h-80 bg-gradient-to-r from-gray-300 to-gray-700 dark:from-[#272829] dark:to-[#191c1a] relative overflow-hidden">
                        <p className='absolute top-10 left-10 text-xl font-medium text-white bg-black rounded px-3 z-10'>Name of the project</p>
                        <button>
                            <img src={Img1} alt="ProjectImage" className='object-cover h-full w-full hover:scale-150 duration-1000 absolute md:left-1/4 top-0 pr-44 py-5 '/>
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}
 
export default ProjectContent;