import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return(
        <div style={{width: '140px', height: "100vh", position: 'sticky', border: '2px solid black', borderRadius: '12px', backgroundColor: 'black'}}>
            <ul style={{display: 'flex', flexDirection: 'column', rowGap:'40px', color: 'white', cursor: 'pointer', padding: '12px 20px', listStyleType: 'none'}}>
                <li><Link to= {"profile"} style={{ color: 'white', textDecoration: 'none' }}>Profile</Link></li>
                <li><Link to= {"settings"} style={{ color: 'white', textDecoration: 'none' }}>Settings</Link></li>
                <li><Link to= {"logs"} style={{ color: 'white', textDecoration: 'none' }}>Logs</Link></li>
            </ul>
        </div>
    )
}