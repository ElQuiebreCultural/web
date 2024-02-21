/* eslint-disable no-unused-vars */
import React from 'react'
import '../index.css'
import img from '../assets/q1.jpg'

function Navbar() {
    return (
        <>
            <div className='navbar'><img style={{height:'60px'}} src={img} /><p className='navbarText'>El Quiebre Cultural®</p></div>
        </>
    )
}

export default Navbar