import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectPage from './pages/ProjectPage'
import SkillsPage from './pages/SkillsPage'

import Navbar from "./pages/components/Nabvar";
import {Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div className="App h-screen dark:bg-[#121212]">
            <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/AboutPage' element={<AboutPage />}/>
                <Route path='/ContactPage' element={<ContactPage />}/>
                <Route path='/ProjectPage' element={<ProjectPage />}/>
                <Route path='/SkillsPage' element={<SkillsPage />}/>
            </Routes>
            
        </div>
    );
}

export default App;
