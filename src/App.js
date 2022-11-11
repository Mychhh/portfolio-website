import HomePage from './pages/Homepage';
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectPage from './pages/ProjectPage'
import SkillsPage from './pages/SkillsPage'

import Footer from './pages/components/Footer';
import Navbar from "./pages/components/Nabvar";
import {Route, Routes} from 'react-router-dom';
import {React, useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import ErrorPage from './pages/ErrorPage';

function App() {
    
    useEffect(() => {
        AOS.init();
    },[])

    const [loading, setLoading] = useState(true);
    const loader = document.getElementById('loader');

    if(loading){
        setTimeout(()=>{
            loader.style.display = "none";
            setLoading(false);
        },1000);
    }

    return (
        !loading
        &&
        
        (<div className="App dark:bg-[#121212]">
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<HomePage />}/>
                <Route path='/AboutPage' element={<AboutPage />}/>
                <Route path='/ContactPage' element={<ContactPage />}/>
                <Route path='/ProjectPage' element={<ProjectPage />}/>
                <Route path='/SkillsPage' element={<SkillsPage />}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
            <Footer/>
        </div>)
        
    );
}

export default App;
