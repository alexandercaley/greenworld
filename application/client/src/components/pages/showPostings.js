import React, { Component } from "react";

import axios from "axios";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ImageLoad from "./ImageLoad";
import Item from "./Item";

class showPostingss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/postings")
      .then(res => {
        console.log(res.data);
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        {this.state.data.map(i => {
          let { id, location, postType, postStatus, picture } = i;
          return (
            <tr key={i} className="row">
              <td>
                <div>
                  <p>{id}</p>
                  <img src={`${id}`}/>
                  <p>{location}</p>
                </div>
              </td>
            </tr>
          );
        })}
      </div>
    );
  }
}

export default showPostingss;
