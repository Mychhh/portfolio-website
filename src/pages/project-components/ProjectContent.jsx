import { useRef, useState } from 'react'
import Project1 from '../../img/MiniProject1.png'
import Project1Practice1 from '../../img/MiniProject1Practice1.png'
import Project1Practice2 from '../../img/MiniProject1Practice2.png'
import MiniProject2 from '../../img/MiniProject2.png'
import MiniProject3 from '../../img/MiniProject3Capstone.jpg'


const ProjectContent = () => {

    const [viewImg, setViewImg] = useState(false);

    const Images = [
        { id: 1, ProjectName: 'Git Resource', ProjectImage: Project1, ProjectInfo: 'Lorem ipsum' },
        { id: 2, ProjectName: 'Blogs Owl', ProjectImage: Project1Practice1, ProjectInfo: 'Lorem ipsum' },
        { id: 3, ProjectName: 'Philhealth Redesign', ProjectImage: Project1Practice2, ProjectInfo: 'Lorem ipsum' },
        { id: 4, ProjectName: 'PTable', ProjectImage: MiniProject2, ProjectInfo: 'Best in mini project 2' },
        { id: 5, ProjectName: 'School Portal', ProjectImage: MiniProject3, ProjectInfo: 'Lorem ipsum' },
    ]

    const [clickedImg, setClickedImg] = useState(null);
    let closeRef = useRef();

    const handleImg = () => {
        setViewImg(!viewImg);
    }

    const handleClickedImg = (img) => {
        setClickedImg(img);
    }
    
    return (
        <>
            {viewImg &&
            
            <div className='flex justify-center items-center h-full w-full fixed top-0 left-0 bg-gray-500 z-20 bg-slate-300 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-40'>
                <div className='flex flex-col md:flex-row w-3/4 h-3/4 border-solid p-0 rounded-md'>
                    <div className='flex items-center justify-center bg-gray-800 w-4/6 p-2 rounded-l-md'>
                        <img src={clickedImg} alt="clicked img" />
                    </div>
                    <div className='flex flex-col gap-2 bg-gray-500 w-2/6 p-2 rounded-r-md'>

                        {/* button to close */}
                        <button 
                        onClick={handleImg}>
                            close
                        </button>

                        {/* header */}
                        <div className='bg-gray-200'>check</div>

                        {/* description of the project */}
                        <div className='bg-gray-400'>check</div>

                        {/* stacks */}
                        <div className='bg-gray-600'>check</div>

                        {/* button to livelinks */}
                        <button className='bg-gray-800'>view</button>
                    </div>
                </div>
            </div>
            }

            <div className="w-10/12 mx-auto py-5 dark:text-white mt-10">
                <div className="grid grid-cols-10 gap-10 justify-center relative">
                    {Images.map((image) => (
                        <div key={image.id} className="theproject col-span-10 md:col-span-5 w-full h-80 bg-gradient-to-r from-gray-300 to-gray-700 dark:from-[#272829] dark:to-[#191c1a] relative overflow-hidden">
                            <p className='absolute top-10 left-10 text-lg font-light text-white bg-black rounded px-3 z-10'>{image.ProjectName}</p>
                            <button
                            onClick={() => {
                                handleClickedImg(image.ProjectImage);
                                handleImg();
                            }}
                            >
                                <img src={image.ProjectImage} alt="ProjectImage" className='object-cover h-full w-full hover:scale-150 duration-1000 absolute md:left-1/4 top-0 pr-44 py-5 ' />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProjectContent;