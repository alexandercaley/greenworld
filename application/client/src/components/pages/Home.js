import React, { Component } from "react";
import { Dropdown, Navbar } from "react-bootstrap";
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
import ProductSearch from "../pages/HomepageList/ProductSearch";
import ProductsList from "./HomepageList/ProductsList";
import ProductDetails from "./HomepageList/ProductDetails";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Home extends Component {
      state = {
      data: [],
      dataFiller: [],
      details_id: 35382,
      pageIndex: 1,
      search:'',
      query:""
    };
  
  
    async getProduct() {
      try {
        const response = await axios.get("/api/postings")
        .then(res => {console.log(res.data);

        this.setState({
          data:res.data
          
        });
      })
      } catch(error) {
        console.log(error);

      }
    }

  componentDidMount() {
    this.getProduct();
  }
  //   axios
  //     .get("/api/postings")
  //     .then(res => {
  //       console.log(res.data);
  //       this.setState({
  //         data: res.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

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
            handleDetails={this.handleDetails}
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
          />
        );
        // case 2:
        //   return(
        //     <Navbar
        //     value={this.state.search}
        //     handleChange={this.handleChange}
        //     handleSubmit={this.handleSubmit}
        //     />
        //   );
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

  handleChange = (e) => {
   // console.log("handle change");
   this.setState({
     search:e.target.value
   },
   ()=> {
   console.log(this.state.search);
    }
  );
};

  handleSubmit = (e) => {
    e.preventDefault();
    const{dataFiller,query,search} = this.state;
    this.setState(()=>{
      return {data:`${dataFiller}${query}${search}`, search:""}
    }, () => {
      this.getProduct();
      console.log("handle submit");
      })
    };
  
  

  render() {
    return (
      <div>
        <Container className="mt-2">
          <Row>
            <div className="container my-6">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Filter
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/Park">Park</Dropdown.Item>
                  <Dropdown.Item href="#/Zipcode">Zip code</Dropdown.Item>
                  <Dropdown.Item href="#/city">city</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <React.Fragment>
              {this.displayPage(this.state.pageIndex)}
            </React.Fragment>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
