import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// import "./Navbar.css";
import { Link } from "react-router-dom";
import UserAuth from "../Users/UserAuth"


class Navbar extends React.Component {

  render() {
    return (
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
          <form className="form-inline my-2 my-lg-0">
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
                  to="/ShowPostings"
                >
                  ShowPostings
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
            </ul>

            {/* <DropdownMenu /> */}
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary  my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <Admin />
        </div>
      </nav>
    );
  }
}

export default Navbar;
