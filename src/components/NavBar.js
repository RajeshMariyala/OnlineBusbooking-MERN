import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleClick1 = () =>{
    sessionStorage.removeItem("user-token");
    setClick(!click);
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>BookBus</span>
            
            <span className="icon">
              <CodeIcon />
            </span>
            
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/booking"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Bookings
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/Tickets"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Tickets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/signup"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick1}
              >
                Logout
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
           

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
