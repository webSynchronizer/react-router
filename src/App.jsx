import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "./index.css"

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

// importing pages
import Home from "./components/pages/Home.jsx"
import Services from "./components/pages/Services.jsx"
import About from "./components/pages/About.jsx"
import Contact from "./components/pages/Contact.jsx"
import NotFound from './components/pages/NotFound.jsx'
import Hello from './components/pages/Hello.jsx'
import Blog from './components/pages/Blog.jsx'

const App = () => {
    return (
        <>
            {/* just create a router in APP.jsx */}
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/hello/:user' element={<Hello />} />
                    <Route path='/blog/:blogname' element={<Blog />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App