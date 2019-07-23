import React, { Component } from "react";
import logo from "../../assets/donkey.jpg";
import axios from "axios";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";
import ImageLoad from "./ImageLoad";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">This is a home page</div>
        <div>
          <img src={logo} alt="logo" style={{ width: "200px" }} />{" "}
          <img src={logo} alt="logo" style={{ width: "200px" }} />{" "}
        </div>
      </div>
    );
  }
}

export default Home;
