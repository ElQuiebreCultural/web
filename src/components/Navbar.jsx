// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../index.css';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import img from '../assets/q4.jpg';
import imgGrieta from '../assets/grietaNavbar.png';

function Navbar() {
    const youtubeUrl = "https://www.youtube.com/TuPaginaDeyoutube";
    const instagramUrl = "https://www.instagram.com/elquiebrecultural";

    return (
        <>
            <div className='navbar'>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img className='imgNavbar1' src={img} alt="Logo" />
                    <p className='navbarText'>El Quiebre Cultural®</p>
                </div>
                {/* <div className="social-icons">
                    <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaYoutube />
                    </a>
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FaInstagram />
                    </a>
                </div> */}
                <img className='imgNavbar2' src={imgGrieta} alt="Grieta Navbar" />
            </div>
        </>
    );
}

export default Navbar;
