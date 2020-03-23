import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/Home">
        <img src="/sharing.png"></img> 
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/aboutUs"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/"
              className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
              Donate Now
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contactUs"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
