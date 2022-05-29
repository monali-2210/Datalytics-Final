import "./NavbarDashboard.css";

const NavbarDashboard = ({ sidebarOpen , openSidebar}) => {
    return (
        <nav className="navbar-dashboard">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                {/* <a href="">Customers</a> */}
                <a href="/admin" className="admin">Admin Dashboard</a>
            </div>
            <div className="navbar__right">
                <a>
                    <i className="fa fa-search"></i>
                </a>
                <a href="/">
                    <img style={{borderRadius: "50px", height: "35px"}} src={localStorage.getItem("profilePic")} alt="" />
                </a>
            </div>
        </nav>
    )
}

export default NavbarDashboard;