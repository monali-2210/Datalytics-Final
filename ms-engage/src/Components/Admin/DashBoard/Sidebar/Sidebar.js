import React from 'react'
import "./Sidebar.css"


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id='sidebar'>
        <div className="sidebar__title">
            <div className="sidebar__img">
                <i className="fa fa-car"></i>
                <h1>Datalytics</h1>

            </div>
            <i className='fa fa-times' 
               id='sidebarIcon' 
               onClick={() => closeSidebar()} ></i>
        </div>

        <div className="sidebar__menu">
            <h2>GENERAL</h2>
            <div className="sidebar__link">
                <i className='fa fa-building-o'></i>
                <a href="/">Home</a>
            </div>
            <div className="sidebar__link active_menu_link">
                <i className='fa fa-home'></i>
                <a href="/admin">Dashboard</a>
            </div>
            <h2>FEATURES</h2>
            <div className="sidebar__link">
                <i className='fa fa-trophy'></i>
                <a href="/leader">Leaderboard</a>
            </div>
            <div className="sidebar__link">
                <i className='fa-solid fa-chart-line'></i>
                <a href="/analytics">Analytics</a>
            </div>
            <div className="sidebar__link">
                <i className='fa fa-money'></i>
                <a href="/pricepred">Predict price</a>
            </div>
            {/* <div className="sidebar__link">
                <i className='fa-solid fa-filter'></i>
                <a href="/filter">Apply Filter</a>
            </div> */}
            <h2>SETTINGS</h2>
            <div className="sidebar__link">
                <i className='fa fa-user'></i>
                <a href="/profile">Profile</a>
            </div>
            <div className="sidebar__link">
                <i className='fa fa-power-off'></i>
                <a href="">Log out</a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar