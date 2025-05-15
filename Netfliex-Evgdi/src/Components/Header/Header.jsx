import React from 'react'
import { FaSearch, FaBell, FaCaretDown } from 'react-icons/fa';
import  './Header.css'
function Header() {
  return (
    <header className="netflix-header">
      {/* Left - Netflix Logo */}
      <div className="logo-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className="logo"
        />
      </div>

      {/* Center - Navigation (optional) */}
      <nav className="nav-items">
        <a href="#">Home</a>
        <a href="#">Series</a>
        <a href="#">Films</a>
        <a href="#">New & Popular</a>
        <a href="#">My List</a>
      </nav>

      {/* Right - Icons */}
      <div className="icons">
        <div className="icon">
          <FaSearch />
        </div>
        <div className="icon">
          <FaBell />
        </div>
        <div className="profile">
          <img
            src="https://www.flaticon.com/free-icons/user"
            alt="Profile"
            className="profile-img"

            
          />
          <FaCaretDown className="dropdown-icon" />
        </div>
      </div>
    </header>
  );
};
export default Header