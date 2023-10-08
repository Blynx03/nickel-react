import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = ({ signedIn, setSignedIn }) => {
  function toggle() {
    let navlink = document.querySelector(".nav-signin-link");
    if (navlink.textContent === "Login" && signedIn === false) {
      navlink.textContent = "Login";
    } else {
      if (navlink.textContent === "Logout" && signedIn === true) {
        navlink.textContent = "Login";
        setSignedIn(false);
      }
    }
  }

  return (
    <>
      <ul className="nav-container">
        <li className="home-btn nav-btn">
          <Link to="/home">Home</Link>
        </li>
        <li className="search-btn other-btn nav-btn">
          <Link to="/pages/search">Search</Link>
        </li>
        <li className="point-btn other-btn nav-btn">
          <Link to="/pages/bypoints">By Points</Link>
        </li>
        <li className="log-btn other-btn nav-btn">
          <Link to={signedIn ? "/pages/foodlog" : "/pages/signin"}>
            Food Log
          </Link>
        </li>
        <li className="login-btn other-btn nav-btn">
          <Link className="nav-signin-link" onClick={toggle} to="/pages/signin">
            Login
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
