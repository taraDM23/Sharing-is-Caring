import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from '../../context/auth-context';
import "./style.css";

function Nav() {

  const { token, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar navbar-light ">
      <Link className="navbar-brand" to="/Home">
        <img src="http://themebubble.com/demo/webify/creative/wp-content/themes/webify/assets/img/logo-dark.png" style={{ marginRight: 15, width: 30, height: 20 }} alt=""></img>
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
                className="nav-link active nav-link"
              >
                Home
            </Link>
            </li>
            {/* Items */}
            {token && <li className="nav-item">
              <Link
                to="/items"
                className="nav-link active nav-link"
              >
                Donate Now
            </Link>
            </li>}

            {/* Contact Us */}

            <li className="nav-item">
              <Link
                to="/contactUs"
                className="nav-link active nav-link"
              >
                Contact
            </Link>
            </li>


            {/* About Us */}
            <li className="nav-item">
              <Link
                to="/aboutUs"
                className="nav-link active nav-link"
              >
                About Us
            </Link>
            </li>
            {/* Log in and Out */}
            {!token && <li className="nav-item justify-content-end">
              <Link
                to="/auth"
                className="nav-link active nav-link"
              >
                Log In
            </Link>
            </li>}
            {token && <li className="nav-item justify-content-end">
              <Link
                className="nav-link active nav-link"

                onClick={logout}
              >
                Log Out
            </Link>
            </li>}
          </ul>
        </div>
      </div>
    </nav >
  );
}

export default Nav;
