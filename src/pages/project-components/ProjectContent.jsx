import { useEffect, useRef, useState } from 'react'
import Project1 from '../../img/MiniProject1.png'
import Project1Practice1 from '../../img/MiniProject1Practice1.png'
import Project1Practice2 from '../../img/MiniProject1Practice2.png'
import MiniProject2 from '../../img/MiniProject2.png'
import MiniProject3 from '../../img/MiniProject3Capstone.jpg'
import close from '../../img/close.png'

const ProjectContent = () => {

    const [viewImg, setViewImg] = useState(false);

    const Images = [
        { id: 1, ProjectName: 'Git Resource', ProjectImage: Project1, ProjectDescription: 'Mini Project 1 in KodeGo. Git resource website is platform where users can learn and get reference about GIT version control system.', ProjectStacks: 'HTML, CSS, Bootstap', ProjectLink: 'https://mychhh.github.io/MiniProject1.github.io/'},
        { id: 2, ProjectName: 'Blogs Owl', ProjectImage: Project1Practice1, ProjectDescription: 'Blogs website about Owls, I created this website just for practice.', ProjectStacks: 'HTML, Bootstap', ProjectLink: 'https://mychhh.github.io/Week2Project2.github.io/'},
        { id: 3, ProjectName: 'Philhealth Redesign', ProjectImage: Project1Practice2, ProjectDescription: 'The design of this website is from Alanniz a tiktok content creator, I just coded it for my practice', ProjectStacks: 'HTML, CSS, Bootstap.', ProjectLink: 'https://mychhh.github.io/Mychhh-philhealth-redesign.github.io/'},
        { id: 4, ProjectName: 'PTable', ProjectImage: MiniProject2, ProjectDescription: 'Best in mini project 2 in KodeGo. The PTable consolidates useful information about the chemical elements into a single location.', ProjectStacks: 'ReactJS, ChakraUi, Bootstrap, Public API.', ProjectLink: 'https://kodego-miniproject2.vercel.app/'},
        { id: 5, ProjectName: 'School Portal', ProjectImage: MiniProject3, ProjectDescription: 'Capstone Project in KodeGo. The School Portal Designed for public schools, to disseminate information regarding school activities and requirements. With online enrollment.', ProjectStacks: 'Tailwind CSS, Alpine JS, Laravel, Livewire.(TALL stack)', ProjectLink: 'https://kodegohighschool.tech/'},
    ]

    const [clickedProject, setClickedProject] = useState({   
        clickedName: null, 
        clickedImg: null, 
        clickedDescription: null, 
        clickedStacks: null, 
        clickedLinks: null,
    });

    const handleImg = () => {
        setViewImg(!viewImg);
    }

    const handleClickedImg = (name, img, desc, stack, link) => {
        
        setClickedProject.clickedName = name;
        setClickedProject.clickedImg = img;
        setClickedProject.clickedDescription = desc;
        setClickedProject.clickedStacks = stack;
        setClickedProject.clickedLinks = link;

    }

    // useref
    // ---search this code
    const imgRef = useRef();
    
    useEffect(() => {
       
        let handler = (e) => {

            if(!imgRef.current.contains(e.target)){
                setViewImg(false);
            }
            
        };
        
        // mouse down listener happens when you pushdown your mouse
        document.addEventListener("mousedown", handler, true);

        return() => {
            document.removeEventListener("mousedown", handler, true);
        }
        
    },[setViewImg])
    // ---search this code

    return (
        <>
            {viewImg &&
            
            <div className='flex justify-center items-center h-full w-full fixed top-0 left-0 bg-gray-500 z-20 bg-slate-300 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-40'>
                <div ref={imgRef} className='flex flex-col md:flex-row w-3/4 h-3/4 border-solid m-0 p-0 rounded-md bg-gradient-to-r from-gray-700 to-gray-300 dark:from-[#272829] dark:to-[#191c1a]'>

                    <div className='flex items-center justify-center w-full md:w-4/6 p-2 rounded-l-md'>
                        <img src={setClickedProject.clickedImg} alt="clicked img" />
                    </div>

                    <div className='flex justify-center flex-col gap-y-4 w-full md:w-2/6 p-2 rounded-r-md relative dark:text-white'>

                        {/* button to close */}
                        <button onClick={handleImg} className="hidden md:flex">
                            <img src={close} alt="close" className='h-7 absolute top-3 right-3'/>
                        </button>

                        {/* header */}
                        <div>
                            <p className='text:normal md:text-xl font-base border-b border-b-black dark:border-b-white inline'>{setClickedProject.clickedName}</p>
                        </div>

                        {/* description of the project */}
                        <div className='text-sm md:text-lg font-light'>
                            <p>{setClickedProject.clickedDescription}</p>
                        </div>

                        {/* stacks */}
                        <div>
                            <p className='text-sm md:text-lg font-light'>This is built with: <span className='text-sm md:text-lg font-normal'>{setClickedProject.clickedStacks}</span></p>
                        </div>

                        {/* button to livelinks */}
                        <div>
                            <a href={setClickedProject.clickedLinks} target='_blank'>
                            <button className='bg-black dark:bg-white dark:text-black text-white text-sm md:text-lg font-light dark:font-normal px-5 py-1 hover:scale-110 duration-300'>
                                Live link
                                
                            </button>
                            </a>
                        </div>
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
                                handleClickedImg(image.ProjectName, image.ProjectImage, image.ProjectDescription, image.ProjectStacks, image.ProjectLink );
                                handleImg();
                            }}
                            >
                                <img src={image.ProjectImage} alt="ProjectImage" className='object-cover h-full w-full hover:scale-150 duration-1000 absolute md:left-1/4 top-0 pr-0 md:pr-44 py-5 ' />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProjectContent;