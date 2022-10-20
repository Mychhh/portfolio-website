import sampleimg from '../../img/1.jpg'
import Capstone from '../../img/MiniProject3Capstone.jpg'
import MiniProject2 from '../../img/MiniProject2.png'

import { Link } from 'react-router-dom';

const Landingpage2 = () => {

    const Projects = [
        {id: 1, img: Capstone, title: 'School Portal', description: 'Capstone Project in KodeGo. The School Portal Designed for public schools, to disseminate information regarding school activities and requirements. With online enrollment.',},
        {id: 2, img: MiniProject2, title: 'PTable', description: 'Best in mini project 2 in KodeGo. The PTable consolidates useful information about the chemical elements into a single location.',},
    ]

    return (
        <div className="bg-[#EDE8E8] dark:bg-[#272829] px-0 py-10 md:px-10 ">
            
            <div className='mb-5 md:mb-10 flex justify-center w-full'>
                <h1 className="inline text-center text-2xl md:text-4xl font-semibold border-b border-black dark:border-white px-3 dark:text-white">Recent Projects</h1>
            </div>

            <div className="w-10/12 mx-auto flex flex-col gap-10">

                {Projects.map((project) => (

                <div key={project.id} className="flex flex-col md:flex-row gap-5 md:gap-10 drop-shadow-2xl dark:text-white">
                    <div className='w-full md:w-3/6'>
                        <img src={project.img} alt="Project picture"/>
                    </div>

                    <div className='flex flex-col justify-center items-start w-full md:w-3/6 gap-3'>

                        <p className='text-lg md:text-2xl font-medium'>{project.title}</p>

                        <p className='text-sm md:text-lg font-light'>{project.description}</p>
                    </div>
                </div>


                ))}

                <div className='flex justify-end w-3/6 ml-auto'>
                    <div className='flex justify-center w-full'>
                        <Link to="/ProjectPage">
                            <button className='text-xs bg-black px-4 py-1 text-white border border-1 border-black  hover:scale-110 duration-200 dark:bg-white dark:border-white dark:text-black md:text-lg md:px-8 md:py-2'>View all my projects</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Landingpage2;