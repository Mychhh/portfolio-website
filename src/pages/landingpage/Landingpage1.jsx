import Navbar from "../components/Nabvar";
import MainContent from "../components/MainContent";

const LandingPage1 = () => {
    return ( 
        <>
            <div className="h-screen dark:bg-[#121212]">
                <Navbar/>
                <MainContent/>
            </div>
        </>
     );
}
 
export default LandingPage1;