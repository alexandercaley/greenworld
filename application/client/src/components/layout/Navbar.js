import React, { Component } from "react";
import logo from "../../assets/donkey.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Navbar.css";
import { Link } from "react-router-dom";
import UserAuth from "../Users/UserAuth";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateData,
  updateClickedDetails,
  handleIndex,
  updateSearch,
  updateHomepage
} from "../redux/actions/homepageAction";

import Home from "../pages/Home";

// import DropdownMenu from "../pages/DropdownMenu";
class Navbar extends Component {
  handleSearch = event => {
    event.preventDefault();
    this.props.updateHomepage(true);
    this.forceUpdate();
    // console.log("line 35 ======");
    axios.get("/api/postings").then(res => {
      // console.log("=======================================");
      let { data } = res;

      if (this.props.toUpdateHomepage == true) {
        this.props.updateHomepage(false);
        let { data, search } = this.props;
        console.log(data, search);
        var searchFilter = data.filter(x => {
          // console.log(x)
          return x.issueType.toLowerCase().includes(search.toLowerCase());
        });
        // this.setState({
        //   somedata: searchFilter
        // });
        // console.log(searchFilter);
        // console.log("=======================================");
        this.props.updateData(searchFilter);
        this.forceUpdate();
      } else {
        this.props.updateData(data);
        this.setState({
          somedata: data
        });
        this.forceUpdate();
      }
    });
    const path = "/home";
    this.props.history.push(path);    
  };

  handleChange = event => {
    // console.log(event.target.search.value);
    let searchInput = event.target.value;
    console.log(searchInput);
    this.props.updateSearch(searchInput);
  };

  render() {
    const { search } = this.props;
    // console.log(search);
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
                to={{pathname:"/post",state: this.props.search}}
                
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
  updateSearch,
  updateHomepage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navbar));
