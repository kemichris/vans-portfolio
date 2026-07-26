import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';

import Logo from "../assets/vans-logo1.png"

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (
        <nav className="nav-bar">
            <img src={Logo} alt="logo" className="logo" />
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                <li><HashLink to="/#practice" onClick={closeMenu}>Practice Areas</HashLink></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
            <div className="nav-right">
                <a href="https://wa.link/2rf7gt" target="_blank" rel="noopener noreferrer" className="btn">
                    {<FaWhatsapp className="nav-btn-icon" />}
                    Whatsapp Now
                </a>
            </div>
            <button
                className='menu-btn'
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
            </button>

        </nav>
    )
}