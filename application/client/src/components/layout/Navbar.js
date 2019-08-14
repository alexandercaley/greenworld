import React, { Component } from "react";
import logo from "../../assets/donkey.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Navbar.css";
import { Link } from "react-router-dom";
import UserAuth from "../Users/UserAuth";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateData,
  updateClickedDetails,
  handleIndex,
  updateSearch
} from "../redux/actions/homepageAction";

import ProductSearch from "../pages/HomepageList/ProductSearch";

// import DropdownMenu from "../pages/DropdownMenu";
class Navbar extends Component {
  handleSearch = event => {
    event.preventDefault();
    console.log(event.target.search.value);
    this.props.updateHomepage(true);
  };

  handleChange = event => {
    // console.log(event.target.search.value);
    let searchInput = event.target.value;
    console.log(searchInput);
    this.props.updateSearch(searchInput);
  };

  render() {
    const { value, handleSubmit, handleChange, search } = this.props;
    console.log(search);
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
          <form className="search" onSubmit={this.handleSearch}>
            <input
              type="text"
              className="searchInput"
              name="search"
              value={ search }
              placeholder="Search by"
              onChange={this.handleChange}
            />
            <button type="submit" className="searchButton">
              Search
              <i className="fas fa-search" />
            </button>
          </form>
          <UserAuth />
        </nav>
      </React.Fragment>
    );
  }
}

// export default Navbar;
// export default Products;
const mapStateToProps = state => {
  let { data, details_id, pageIndex, search } = state.homepageReducer;
  return { data, details_id, pageIndex, search };
};

const mapDispatchToProps = {
  updateData,
  updateClickedDetails,
  handleIndex,
  updateSearch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navbar));
