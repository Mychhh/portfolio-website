import Img1 from '../../img/1.jpg'
import Img2 from '../../img/2.jpg'


const ProjectContent = () => {
    return ( 
        <>
            <div className="w-10/12 mx-auto py-5 dark:text-white mt-10">
                <div className="grid grid-cols-10 gap-10">

                    <div className="col-span-10 md:col-span-5 bg-gray-300">
                        <img src={Img1} alt="ProjectImage" className='object-contain'/>
                    </div>
                    
                    <div className="col-span-10 md:col-span-5 bg-gray-300">
                        <img src={Img2} alt="ProjectImage" className='object-contain'/>
                    </div>

                    <div className="col-span-10 md:col-span-5 bg-gray-300">
                        <img src={Img1} alt="ProjectImage" className='object-contain'/>
                    </div>
                    
                    <div className="col-span-10 md:col-span-5 bg-gray-300">
                        <img src={Img2} alt="ProjectImage" className='object-contain'/>
                    </div>

                    <div className="col-span-10 md:col-span-5 bg-gray-300">
                        <img src={Img1} alt="ProjectImage" className='object-contain'/>
                    </div>
                    
                    <div className="col-span-10 md:col-span-5 bg-gray-300">
                        <img src={Img2} alt="ProjectImage" className='object-contain'/>
                    </div>

                </div>
            </div>
        </>
    );
}
 
export default ProjectContent;