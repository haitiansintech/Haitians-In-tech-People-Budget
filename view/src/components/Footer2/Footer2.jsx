import React from 'react';
import './Footer2.css'

const Footer2 = () => {
    return (
        <div className="footer">
            <div className="footer-info">
                <div id="footer-logo"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus magna enim id integer congue eu. Tempor urna augue sed</p>
                <h6>Copyright Haitian In Tech</h6>
            </div>
            <div className="get-in-touch">
                <h3>Get In Touch</h3>
                <h5>📭 8819 Ohio St. South Gate,
                    CA 90280</h5>
                <h5>📩 ourstudio@hello.com</h5>
                <h5>📞 +1 386-688-3295</h5>
            </div>
            <div className="services">
                <h3>Service & Information</h3>
                <h5>About Carolina</h5>
                <h5>COVID-19</h5>
                <h5>Health</h5>
                <h5>Money & Tax</h5>
                <h5>Vote & Election</h5>
            </div>
            <div className="links">
                <h3>Quick Links</h3>
                <h5>Latest News</h5>
                <h5>Events</h5>
                <h5>Departments</h5>
            </div>
        </div>
    );
};

export default Footer2;
