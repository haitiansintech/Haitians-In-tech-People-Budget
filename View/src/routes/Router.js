import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Home2 from '../pages/Home2/Home2';
import About from '../pages/About/About';
import Budget from '../pages/Budget/Budget';
import API from '../pages/API/API';

const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home2 />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/budget" element={<Budget />} />
                <Route exact path="/API" element={<API />} />
            </Routes>
        </Router>
    );
};

export default RouterComponent;