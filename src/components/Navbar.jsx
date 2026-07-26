import { Link } from "react-router-dom"
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';

import Logo from "../assets/vans-logo1.png"
import { PracticeSection } from "./PracticeSection";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="nav-bar">
            <img src={Logo} alt="logo" className="logo" />
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to={PracticeSection}>Practice Areas</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="nav-right">
                <a href="http://" target="_blank" rel="noopener noreferrer" className="btn">
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