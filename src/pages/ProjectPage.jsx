import PagesHeader from "./components/PagesHeader";
import ProjectContent from "./project-components/ProjectContent";

const ProjectPage = () => {
    return ( 
        <div className="dark:bg-[#121212]">
            <PagesHeader/>
            <ProjectContent/>
        </div>
    );
}
 
export default ProjectPage;