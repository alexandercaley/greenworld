import React, { Component } from "react";
import { Dropdown, Navbar } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { Container, Row } from "reactstrap";

import {
  updateData,
  updateClickedDetails,
  handleIndex,
  updateHomepage,
  clickedItem
} from "../redux/actions/homepageAction";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      somedata: []
    };
  }

  componentDidMount() {
    // when homepage mounts, get all data from backend
    // and store it in store
    this.forceUpdate();
    console.log("line 35 ======");
    axios.get("/api/postings").then(res => {
      console.log("=======================================");
      let { data } = res;
      console.log(this.props.toUpdateHomepage);

      if (this.props.toUpdateHomepage == true) {
        this.props.updateHomepage(false);
        let { data, search } = this.props;
        console.log(data, search);
        var searchFilter = data.filter(x => {
          // console.log(x)
          return x.issueType.toLowerCase().includes(search.toLowerCase());
        });
        this.setState({
          somedata: searchFilter
        });
        console.log(searchFilter);
        console.log("=======================================");
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
  }

  goToDetails = data => {
    console.log(data);
    const path = "/productdetails";
    this.props.clickedItem(data);
    this.props.history.push(path);
  };

  render() {
    const { data } = this.props;
    const { somedata } = this.state;
    return (
      <div>
        <Container className="mt-2">
          <Row>
            <div className="container my-6">
            </div>
            <React.Fragment>
              <div className="rwo" />
              <div className="container my-6">
                <div className="row">
                  {somedata.map(i => {
                    return (
                      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                        <div onClick={() => this.goToDetails(i)}>
                          <div className="card">
                            <img
                              src={require("./HomepageList/uploads/b.png")}
                              className="img-card-top"
                              alt="Issue Image"
                              style={{ height: "14rem" }}
                            />
                            <div className="card-body text-capitalized">
                              <h6>Street: {i.street}</h6>
                              <h6>City: {i.city}</h6>
                              <h6>Zipcode: {i.zipcode}</h6>
                              <h6>State: {i.state}</h6>
                              <h6 className="text-warning text-slanted">
                                Issue Type: {i.issueType}
                              </h6>
                              <h6 className="text-warning text-slanted">
                                Description: {i.description}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </React.Fragment>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let {
    data,
    details_id,
    pageIndex,
    search,
    toUpdateHomepage
  } = state.homepageReducer;
  return { data, details_id, pageIndex, search, toUpdateHomepage };
};

const mapDispatchToProps = {
  updateData,
  updateClickedDetails,
  handleIndex,
  updateHomepage,
  clickedItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home));
