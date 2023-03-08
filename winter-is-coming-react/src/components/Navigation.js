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
                    <a className="navbar-brand mt-2 mt-lg-0" href="/">
                        <img
                            src="\images\logo.jpg"
                            height="40"
                            width="80"
                            alt="WIC"
                            loading="lazy"
                        />
                    </a>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/resorts">All Resorts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/myResorts">My Resorts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/topResorts">Top Resorts</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex align-items-center">
                    <a className="nav-link" href="/login">Login</a>
                    <a className="nav-link" href="/register">Register</a>
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
                                <a className="dropdown-item" href="/profile">My profile</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/settings">Settings</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/logout">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </nav>

    );
}

export default Navigation;