import React from 'react';
import HomePage from './pages/Homepage';
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectPage from './pages/ProjectPage'
import SkillsPage from './pages/SkillsPage'

import Footer from './pages/components/Footer';
import Navbar from "./pages/components/Nabvar";
import {Route, Routes} from 'react-router-dom';

function App() {

    return (
        <div className="App dark:bg-[#121212]">
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<HomePage />}/>
                <Route path='/AboutPage' element={<AboutPage />}/>
                <Route path='/ContactPage' element={<ContactPage />}/>
                <Route path='/ProjectPage' element={<ProjectPage />}/>
                <Route path='/SkillsPage' element={<SkillsPage />}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
