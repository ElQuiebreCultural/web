/* eslint-disable no-unused-vars */
import React from 'react';
import '../index.css';
import img from '../assets/q4.jpg';
import imgGrieta from '../assets/grietaNavbar.png';

function Navbar() {
    return (
        <>
            <div className='navbar'>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img className='imgNavbar1' src={img} />
                    <p className='navbarText'>El Quiebre Cultural®</p>
                </div>
                <img className='imgNavbar2' src={imgGrieta} />
            </div>
        </>
    );
}

export default Navbar;
