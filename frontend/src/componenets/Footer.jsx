import React from 'react';
import logo from '../assets/logo copy.jpeg';
import "./header.css"

function Footer() {
    return (
        <div className="footer">
            <img className="h-10" src={logo} alt="Blog website logo" />
            <div>
                <p>For bloggers and To bloggers with ❤️</p>
            </div>
        </div>
    );
}

export default Footer;
