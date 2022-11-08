import React from 'react';
import './About.css';
import NavBar2 from "../../components/NavBar2/Navbar2";
import Footer2 from "../../components/Footer2/Footer2";
import AboutBody from "../../components/AboutBody/AboutBody";

const About = () => {
    return (
        <div>
            <NavBar2 page="About"/>
            <AboutBody />
            <Footer2 />
        </div>
    );
};

export default About;
