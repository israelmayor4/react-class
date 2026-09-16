import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return(
        <div style={{ position: 'sticky', border: '2px solid black', borderRadius: '12px', backgroundColor: 'black'}}>
            <ul style={{display: 'flex', justifyContent: 'space-evenly', color: 'white', cursor: 'pointer', padding: '12px 20px', listStyleType: 'none'}}>
                <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
                <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
                <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
                <li><Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link></li>
            </ul>
        </div>
    )
}