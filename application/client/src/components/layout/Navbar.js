import React from "react";
import logo from "../../assets/donkey.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Navbar.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< Updated upstream
import Admin from "../Users/Admin";
=======
import UserAuth from "../Users/UserAuth"
// import SignIn from "../Users/SignIn";
// import SignUp from "../Users/SignUp";

>>>>>>> a5816c8391a0b59a8de6bfa3e43f5143539d59c5
class Navbar extends React.Component {

  render() {
    return (
<<<<<<< HEAD
      // <div className="Navbar">
      //   <header className="Navbar-header">
=======
import UserAuth from "../Users/UserAuth";
// import SignIn from "../Users/SignIn";
// import SignUp from "../Users/SignUp";

class Navbar extends React.Component {
  render() {
    return (
>>>>>>> Stashed changes
=======

>>>>>>> a5816c8391a0b59a8de6bfa3e43f5143539d59c5
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        
        <a className="navbar-brand ml-5" href="#">
          <h1>Team 06</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i className="fas fa-bars" style={{ color: "#fff" }} />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="/home"
              >
                Home
                <i className="fas fa-home" />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="/news"
              >
                news
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="/aboutUs"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="/post"
              >
                Post
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="/category"
              >
                Category
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="/login"
              >
                login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white text-uppercase ml-5"
                to="/register"
              >
                register
              </Link>
            </li>
          </ul>
          <UserAuth />
        </div>
      </nav>
    );
  }
}

export default Navbar;
