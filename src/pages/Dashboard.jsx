import { Outlet } from "react-router-dom"
import { Sidebar } from "../Component/Sidebar"
import { Navbar } from "../Component/Navbar"

export const Dashboard = () => {
    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 3fr', columnGap: "20px",}}>
            
            <Sidebar />
            <div>
                <h1>Dashboard</h1>
                <Outlet />
            </div>  
        </div>
    )
}