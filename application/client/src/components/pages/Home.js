import React, { Component } from "react";
import { Dropdown, Navbar } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { Container, Row } from "reactstrap";

import ProductsList from "./HomepageList/ProductsList";
import ProductDetails from "./HomepageList/ProductDetails";

import {
  updateData,
  updateClickedDetails,
  handleIndex
} from "../redux/actions/homepageAction";

class Home extends Component {
  state = {
    data: [],

    details_id: 35382,
    pageIndex: 1,
    search: ""
  };

  async getProduct() {
    try {
      //const filler = await fetch(this.state.data);
      const res = await axios.get("/api/postings").then(res => {
        console.log(res.data);
        let { data } = res;
        console.log(data);
        this.props.updateData(data);
        // this.setState({
        //   data: res.data
        // });
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    // when homepage mounts, get all data from backend
    // and store it in store
    axios.get("/api/postings").then(res => {
      console.log(res.data);
      let { data } = res;
      console.log(data);
      this.props.updateData(data);
    });
  }

  // index always have value of 0 or 1
  // depending on the value changed, is what page renders
  displayPage = index => {
    console.log(index);
    switch (index) {
      case 0:
        return (
          <ProductDetails
          id={this.props.details_id}
          // handleIndex={this.handleIndex}
          />
        );
      case 1:
        console.log("case1")
        return (
          <ProductsList
            issue={this.props.data}
            handleDetails={this.handleDetails}
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
          />
        );
      default:
    }
  };

  handleIndex = index => {
    this.props.handleIndex(index)
    // this.setState({
    //   pageIndex: index
    // });
  };

  handleDetails = (index, id) => {
    // this.setState({
    //   details_id: id,
    //   pageIndex: index
    // });
    this.props.updateClickedDetails(id, index);
  };

  handleChange = e => {
    // console.log("handle change");
    this.setState(
      {
        search: e.target.value
      },
      () => {
        console.log(this.state.search);
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const { data, search } = this.state;
    var searchFilter = data.filter(function(x) {
      return x.postType.toLowerCase().includes(search.toLowerCase());
    });
    console.log(searchFilter);
    this.setState(() => {
      return { data: searchFilter, search };
    });
  };

  render() {
    
    console.log(this.props)
    return (
      <div>
        <Container className="mt-2">
          <Row>
            <div className="container my-6">
              {/* <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Filter
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/Park">Park</Dropdown.Item>
                  <Dropdown.Item href="#/Zipcode">Zip code</Dropdown.Item>
                  <Dropdown.Item href="#/city">city</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </div>
            <React.Fragment>
              {this.displayPage(this.props.pageIndex)}
            </React.Fragment>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  let { data, details_id, pageIndex } = state.homepageReducer;
;
  return { data, details_id, pageIndex };
};

const mapDispatchToProps = {
  updateData,
  updateClickedDetails,
  handleIndex
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home));
