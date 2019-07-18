import React from "react";
import logo from "../../assets/donkey.jpg";
import { Link } from "react-router-dom";
import Admin from "../Users/Admin";
class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand ml-5" href="#">
          {/* <img src={logo} alt="logo" style={{ width: "35px" }} /> */}
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
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0">
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
