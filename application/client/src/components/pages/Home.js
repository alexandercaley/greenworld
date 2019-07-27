import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import glenCanyonPark from "./assets/glenCanyonPark.jpg";
import washington from "./assets/washingtonSquare.jpg";

import axios from "axios";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";
import FirstArrayExample from "./FirstArrayExample";
import DropdownMenu from "./DropdownMenu";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  Text
} from "reactstrap";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false
    };
  }
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          data: json
        });
      });
  }

  render() {
    var { isLoaded, data } = this.state;
    if (!isLoaded) {
      return <div> Loading ...</div>;
    } else {
      return (
        <div>
          <Container className="mt-2">
            <Row>
              <Col lg={8} md={8} xs={8}>
                <Card body outline color="secondary" className="mb-2">
                  Json API used to fetch data
                  <ul>
                    {data.map(data => (
                      <li key={data.id}>
                        Name: {data.name} | Email: {data.email}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Col>
              <Col lg={8} md={8} xs={8}>
                <Card body outline color="secondary" className="mb-2">
                  <DropdownMenu />
                  <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                      All
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Park</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Zip code</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Location</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
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
                    {/* <small className="text-muted text-center">
                      Should include washington Park Map
                    </small> */}
                    <div style={{ height: "50vh", width: "100%" }}>
                      <GoogleMapReact
                        // bootstrapURLKeys={{
                        //   key: `AIzaSyBUHdcZt1CDRo9chaTXDHda-Wkj4HFh7yE`
                        // }}
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
}

export default Home;
