import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-light "> 
      <Link className="navbar-brand" to="/Home">
        Sharing is Caring
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/Home"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
            </Link>
            </li>
            {/* Items */}
            <li className="nav-item">
              <Link
                to="/"
                className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
              >
                Donate Now
            </Link>
            </li>
            {/* Contact Us */}
            <li className="nav-item">
              <Link
                to="/contactUs"
                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
              >
                Contact
            </Link>
            </li>
            {/* About Us */}
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
          </ul>
        </div>
      </div>
    </nav >
  );
}

export default Nav;
