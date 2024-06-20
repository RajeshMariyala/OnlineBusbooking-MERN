import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar1() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleClick1 = () =>{
    sessionStorage.removeItem("user-token1");
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
                to="/adminhome"
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
                to="/schedule"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Schedule
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/BusScheduling"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                BusScheduling
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/userList"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                UserList
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/BusList"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                BusList
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

export default NavBar1;
