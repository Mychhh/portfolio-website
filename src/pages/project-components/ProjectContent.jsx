import Project1 from '../../img/MiniProject1.png'
import Project1Practice1 from '../../img/MiniProject1Practice1.png'
import Project1Practice2 from '../../img/MiniProject1Practice2.png'
import MiniProject2 from '../../img/MiniProject2.png'
import MiniProject3 from '../../img/MiniProject3Capstone.png'


const ProjectContent = () => {

    // const [project, setProject] = useState([
    //     {id: 1, ProjectName: 'Mini Project1', ProjectImage: Project1, ProjectInfo: 'Lorem ipsum'}
    // ])

    const Images = [
        { id: 1, ProjectName: 'Git Resource', ProjectImage: Project1, ProjectInfo: 'Lorem ipsum' },
        { id: 2, ProjectName: 'Blogs Owl', ProjectImage: Project1Practice1, ProjectInfo: 'Lorem ipsum' },
        { id: 3, ProjectName: 'Philhealth Redesign', ProjectImage: Project1Practice2, ProjectInfo: 'Lorem ipsum' },
        { id: 4, ProjectName: 'PTable', ProjectImage: MiniProject2, ProjectInfo: 'Best in mini project 2' },
        { id: 5, ProjectName: 'School Portal', ProjectImage: MiniProject3, ProjectInfo: 'Lorem ipsum' },
    ]
    
    return (
        <>
            <div className="w-10/12 mx-auto py-5 dark:text-white mt-10">
                {Images.map((image) => (
                    <div key={image.id} className="grid grid-cols-10 gap-10 justify-center relative">
                        <div className="theproject col-span-10 md:col-span-5 w-full h-80 bg-gradient-to-r from-gray-300 to-gray-700 dark:from-[#272829] dark:to-[#191c1a] relative overflow-hidden">
                            <p className='absolute top-10 left-10 text-lg font-light text-white bg-black rounded px-3 z-10'>{image.ProjectName}</p>
                            <button>
                                <img src={image.ProjectImage} alt="ProjectImage" className='object-cover h-full w-full hover:scale-150 duration-1000 absolute md:left-1/4 top-0 pr-44 py-5 ' />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProjectContent;