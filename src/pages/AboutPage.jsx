import PagesHeader from "./components/PagesHeader";
import AboutContent from "./about-components/AboutContent";

const AboutPage = () => {
    return ( 
        <div className="dark:bg-[#121212]">
            <PagesHeader/>
            <AboutContent/>
        </div>
     );
}
 
export default AboutPage;