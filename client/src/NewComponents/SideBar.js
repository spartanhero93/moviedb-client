import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className="menu" style={{ listStyleType: 'none', padding: 0, display: isOpen ? 'block' : 'none' }}>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </div>
    );
};

export default SideBar;
