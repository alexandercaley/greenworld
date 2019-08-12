import React from "react";
import logo from "../../assets/donkey.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Navbar.css";
import { Link } from "react-router-dom";
import UserAuth from "../Users/UserAuth"

import ProductSearch from "../pages/HomepageList/ProductSearch";

// import DropdownMenu from "../pages/DropdownMenu";
class Navbar extends React.Component {

  render() {
    const {
      value,
      handleSubmit,
      handleChange
    } = this.props;

    return (
      <React.Fragment>
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
                to="/post"
              >
                Post
              </Link>
            </li>            
          </ul>
          <UserAuth/>
        </div>
      </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;