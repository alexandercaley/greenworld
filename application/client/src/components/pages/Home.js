import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import glenCanyonPark from "./assets/glenCanyonPark.jpg";
import washington from "./assets/washingtonSquare.jpg";

import axios from "axios";

// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";
import FirstArrayExample from "./FirstArrayExample";
import DropdownMenu from "./DropdownMenu";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardFooter
} from "reactstrap";
import GoogleMapReact from "google-map-react";
import JsonApi from "./JsonApi";
import { recipes } from "./HomepageList/tempList";
import ProductsList from "./HomepageList/ProductsList";
import ProductDetails from "./HomepageList/ProductDetails";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Home extends Component {
  state = {
    recipes: recipes,
    url:
      "https://www.food2fork.com/api/search?key=7cd3e527ad66caa92734088cb37f9732",
    base_url:
      "https://www.food2fork.com/api/search?key=7cd3e527ad66caa92734088cb37f9732",

    details_id: 35375,
    pageIndex: 1
    // search: "",
    // query: "&q=",
    // error: ""
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      if (jsonData.recipes.length === 0) {
        this.setState(() => {
          return { error: `No results match your search` };
        });
      } else {
        this.setState(() => {
          return { recipes: jsonData.recipes };
        });
      }
    } catch (erro) {
      console.log(erro);
    }
  }
  displayPage = index => {
    switch (index) {
      case 0:
        return (
          <ProductDetails
            id={this.state.details_id}
            handleIndex={this.handleIndex}
          />
        );
      case 1:
        return (
          <ProductsList
            recipes={this.state.recipes}
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
    this.setState({
      pageIndex: index
    });
  };
  handleDetails = (index, id) => {
    this.setState({
      details_id: id,
      pageIndex: index
    });
  };
  handleChange = e => {
    this.setState(
      {
        search: e.target.value
      },
      () => {}
    );
  };
  handleSubmit = e => {
    e.preventDefault();
    const { base_url, query, search } = this.state;
    this.setState(
      () => {
        return {
          url: `${base_url}${query}${search}`,
          search: ""
        };
      },
      () => {
        this.getRecipes();
      }
    );
  };
  newMethod() {
    console.log(this.state.search);
  }
  render() {
    return (
      <div>
        <React.Fragment>
          {this.displayPage(this.state.pageIndex)}
        </React.Fragment>

        <Container className="mt-2">
          <Row>
            <Col lg={8} md={8} xs={8}>
              <Card body outline color="secondary" className="mb-2">
                <JsonApi />
              </Card>
            </Col>
            <Col lg={8} md={8} xs={8}>
              <Card body outline color="secondary" className="mb-2">
                <DropdownMenu />

                <br />
                <FirstArrayExample />

                <Link to="/showPostings">
                  Click Here to check posted items in database
                </Link>
                <br />
              </Card>
            </Col>

            <Col lg={8} md={8} xs={8}>
              <Card body outline color="secondary" className="mb-2">
                <img src={washington} alt="logo" style={{ width: "300px" }} />{" "}
                <CardBody>
                  <CardText> washington Park detail goes here</CardText>
                </CardBody>
                <CardFooter>
                  <small className="text-muted text-center">
                    Should include washington Park Map
                  </small>
                  <div style={{ height: "50vh", width: "100%" }}>
                    <GoogleMapReact
                      bootstrapURLKeys={{
                        key: `AIzaSyBUHdcZt1CDRo9chaTXDHda-Wkj4HFh7yE`
                      }}
                      defaultCenter={this.props.center}
                      defaultZoom={this.props.zoom}
                    >
                      <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                      />
                    </GoogleMapReact>
                  </div>
                </CardFooter>
              </Card>
            </Col>

            <Col lg={8} md={8} xs={8}>
              <Card body outline color="secondary" className="mb-2">
                <img
                  src={glenCanyonPark}
                  alt="logo"
                  style={{ width: "300px" }}
                />{" "}
                <CardBody>
                  <CardText> glenCanyonPark details goes here</CardText>
                </CardBody>
                <CardFooter>
                  <small className="text-muted text-center">
                    Should include glenCanyonPark Map
                  </small>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
