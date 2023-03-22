import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link className="navbar-brand mt-2 mt-lg-0" to={"/"}><img
                        src="\images\logo.jpg"
                        height="40"
                        width="80"
                        alt="WIC"
                        loading="lazy"
                    /></Link>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/resorts"} className="nav-link">All Resorts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/myResorts"} className="nav-link">My Resorts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/topResorts"} className="nav-link">Top Resorts</Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex align-items-center">
                    <Link to={"/login"} className="nav-link" >Login</Link>
                    <Link to={"/register"} className="nav-link" >Register</Link>
                    <div className="dropdown">
                        <a
                            className="dropdown-toggle d-flex align-items-center hidden-arrow"
                            id="navbarDropdownMenuAvatar"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                            href="/profile"
                        >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                className="rounded-circle"
                                height="35"
                                alt="Black and White Portrait of a Man"
                                loading="lazy"
                            />
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuAvatar"
                        >
                            <li>
                                <Link to={"/profile"} className="dropdown-item">Profile</Link>
                            </li>
                            <li>
                                <Link to={"/settings"} className="dropdown-item">Settings</Link>
                            </li>
                            <li>
                                <Link to={"/logout"} className="dropdown-item">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </nav>

    );
}

export default Navigation;