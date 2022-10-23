import PagesHeader from "./components/PagesHeader";
import SkilllsContent from "./skills-components/SkillsContent";

const SkillsPage = () => {

    document.title = "Skills - Michael"; 

    return (
        <div className="dark:bg-[#121212]">
            <PagesHeader />
            <SkilllsContent />
        </div>
    );
}

export default SkillsPage;