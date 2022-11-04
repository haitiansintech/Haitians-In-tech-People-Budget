import React, { useState, useEffect } from 'react';
import './NavBar2.css';

const NavBar2 = ({  page }) => {
    const [home, setHome] = useState("");
    const [budget, setBudget] = useState("");
    const [initiatives, setInitiatives] = useState("");
    const [API, setAPI] = useState("");
    const [about, setAbout] = useState("");

    useEffect(() => {
        if (page === "Home") {
            setHome("highlight")
        } else if (page === "Budget") {
            setBudget("highlight")
        } else if (page === "Initiatives") {
            setInitiatives("highlight")
        } else if (page === "API") {
            setAPI("highlight")
        } else if (page === "About") {
            setAbout("highlight")
        }
    }, [])

    return (
        <div className="navbar">
            <div className="logo"></div>
            <div className="options">
                <div className={home}>Home</div>
                <div className={budget}>Budget</div>
                <div className={initiatives}>Initiatives</div>
                <div className={API}>Open API</div>
                <div className={about}>About</div>
            </div>
            <div className="requests"><button className="request-button">Request an Issues</button></div>
        </div>
    );
};

export default NavBar2;
