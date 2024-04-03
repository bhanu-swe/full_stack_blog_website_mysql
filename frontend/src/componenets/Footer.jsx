import React from 'react';
import logo from '../assets/logo copy.jpeg';

function Footer() {
    return (
        <div className="fixed bottom-0 w-full bg-teal-300 p-4 flex justify-between items-center">
            <img className="h-10" src={logo} alt="Blog website logo" />
            <div>
                <p>For bloggers and To bloggers with ❤️</p>
            </div>
        </div>
    );
}

export default Footer;
