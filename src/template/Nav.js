import {
    Home, X,
    Book,
    Briefcase,
    CreditCard,
    UserCheck,
    Bell,
    Settings,
} from 'react-feather';

function Nav() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <div className="sidebar-brand d-flex align-items-center justify-content-between" href="#">
                <div className="bg-white"></div>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon  ">
                        <a href="#"> <img src="assets/img/logo.png" alt="" /></a>
                    </div>
                    <div className="sidebar-brand-text mx-1"><a href="#" className="text-black">Rework Portal</a></div>
                </div>
                <button className="rounded-circle border-0 " id="sidebarToggle">
                    <X size={18} />
                </button>
            </div>

            <div className="sidebar-profile">
                <img src="assets/img/profile-default.png" alt="" />
                <div className="user-details text-center">
                    <h4 className="name-text">James Kalu</h4>
                    <h6 className="email-text">james@gmail.com</h6>
                    <h6 className="email-text">070324234234</h6>

                    <div className="d-flex">
                        <div className="col">
                            <h3 className="">9</h3>
                            <small>Months</small>
                        </div>
                        <div className="col">
                            <div className="vertical-divider"></div>
                        </div>
                        <div className="col">
                            <h3 className="">13</h3>
                            <small>Courses</small>
                        </div>

                    </div>

                </div>
            </div>


            <li className="nav-item active">
                <a className="nav-link" href="#">
                    <Home size={18} />
                    <span>Dashboard</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <Book size={18} />
                    <span>Courses</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <Briefcase size={18} />
                    <span>Projects</span> <span className="nav-notice">5</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <Briefcase size={18} />
                    <span>Assignment</span> <span className="nav-notice">1</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <CreditCard size={18} />
                    <span>Payments</span> </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">
                    <UserCheck size={18} />
                    <span>Attendance</span> </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#">
                    <Bell size={18} />
                    <span>Notifications</span> <span className="nav-notice">4</span> </a>
            </li>

            <hr className="sidebar-divider" />

            {/* <div className="sidebar-heading">
                Interface
            </div>  */}

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <Settings size={18} />
                    <span>Settings</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <a className="collapse-item" href="#">Profile</a>
                        <a className="collapse-item" href="#">Password</a>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="widgets.html">
                    <Bell size={18} />
                    <span>Widgets</span> </a>
            </li>







        </ul>
    )
}

export default Nav;