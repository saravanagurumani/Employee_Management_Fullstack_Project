import React from 'react';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">SGM Tech Pvt LTd</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="admin justify-content-end">
          <AccountCircleIcon style={{ color: 'white', fontSize: 35 }} />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
