import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Project from './Project';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
    return (
        <>
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/project' element={<Project />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='*' element={<Home />} />
                </Routes>
                <Footer />
            </div>
        </>
    )
}

export default App