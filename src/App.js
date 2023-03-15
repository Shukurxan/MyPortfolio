import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Foot from './components/foot';
import Header from './containers/header';
import About from './containers/about';
import Resume from './containers/resume';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Error from './Error';

function App() {
    return(
        <div>
            <Nav />
            <div>
                <Routes>
                    <Route path='/' element={<Header />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </div> 
            <Foot />
        </div> 
    );
}

export default App