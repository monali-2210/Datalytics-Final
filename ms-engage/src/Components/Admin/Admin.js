import React from 'react'
import "./Admin.css"
import { useState } from 'react'
import NavbarDashboard from './DashBoard/NavbarDashboard/NavbarDashboard'
import Sidebar from './DashBoard/Sidebar/Sidebar'
import Features from './DashBoard/Features/Features'
import Main from "./DashBoard/Main/Main";

export default function Admin() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    return (
        <div className='container'>
            <NavbarDashboard sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
            {/* <h1>React Dashboard</h1> */}
            <Main></Main>
            <Features></Features>
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </div>
    )
}
