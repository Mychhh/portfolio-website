import LandingPage1 from "./landingpage/Landingpage1";
import Landingpage2 from "./landingpage/Landingpage2";
import Landingpage3 from "./landingpage/Landingpage3";
import BackToTopButton from "./components/BackToTopButton";

const HomePage = () => {
    
    document.title = "Michael - Software Developer"; 
    
    return (
        <>
            <LandingPage1/>
            <Landingpage2/>
            <Landingpage3/>
            <BackToTopButton/>
        </>
    );
}

export default HomePage;