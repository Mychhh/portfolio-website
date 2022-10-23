import PagesHeader from "./components/PagesHeader";
import AboutContent from "./about-components/AboutContent";
import BackToTopButton from "./components/BackToTopButton";

const AboutPage = () => {

    document.title = "About - Michael"; 

    return ( 
        <div className="dark:bg-[#121212]">
            <PagesHeader/>
            <AboutContent/>
            <BackToTopButton/>
        </div>
     );
}
 
export default AboutPage;