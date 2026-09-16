import { Outlet } from "react-router-dom"
import { Sidebar } from "../Component/Sidebar"
import { Navbar } from "../Component/Navbar"

export const Dashboard = () => {
    return (
        <div>
            
            <Sidebar />
            <div>
                <h1>Dashboard</h1>
                <Outlet />
            </div>  
        </div>
    )
}