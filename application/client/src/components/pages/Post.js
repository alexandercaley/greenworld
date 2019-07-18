import React, { Component } from "react";

// import axios from "axios";

// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";
import ImageLoad from "./ImageLoad";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: null
    };
    //   this.handleUploadImage = this.handleUploadImage.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  toggle(e) {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <div
          className="ui form segment text-center"
          onSubmit={this.handleSubmit}
          noValidate
        >
          <h3 className="text-center text-info">Post Any Issue</h3>
          <br />
          <div className="two fields">
            <div className="field">
              <label htmlFor="name">Type Issue</label>
              <br />
              <input
                // className={formErrors.name.length > 0 ? "error" : null}
                placeholder="Type Issue"
                name="fullname"
                type="text"
                noValidate
                // onChange={this.handleChange}
              />

              {/* {formErrors.name.length > 0 && (
              <Span className="errorMessage">{formErrors.name}</Span>
            )} */}
            </div>
          </div>
          <br />
          <div className="two fields">
            <div className="field">
              <label htmlFor="name">Location</label>
              <br />
              <input
                // className={formErrors.name.length > 0 ? "error" : null}
                placeholder=" Location"
                name="name"
                type="Lacation"
                noValidate
                // onChange={this.handleChange}
              />

              {/* {formErrors.name.length > 0 && (
              <Span className="errorMessage">{formErrors.name}</Span>
            )} */}
            </div>
          </div>

          <br />
          <div className="two fields">
            <div className="field">
              <label htmlFor="name">Zipcode</label>
              <br />
              <input
                // className={formErrors.name.length > 0 ? "error" : null}
                placeholder=" Zipcode"
                name="Zipcode"
                type="zipcode"
                noValidate
                // onChange={this.handleChange}
              />

              {/* {formErrors.name.length > 0 && (
              <Span className="errorMessage">{formErrors.name}</Span>
            )} */}
            </div>
          </div>

          <br />
          <div className="two fields">
            <div className="field">
              <label htmlFor="name">Discription</label>

              <br />
              <input
                // className={formErrors.name.length > 0 ? "error" : null}
                placeholder=" Detail"
                name="Zipcode"
                type="zipcode"
                noValidate
                // onChange={this.handleChange}
              />

              {/* {formErrors.name.length > 0 && (
              <Span className="errorMessage">{formErrors.name}</Span>
            )} */}
            </div>
          </div>
          <Link to="/showPostings">Click Here to check posted items in database</Link>
          <br />
          <ImageLoad />

          <br />
          <button className="submit button" onClick={this.handleSubmit}>
            Submit Issue
          </button>
        </div>
      </div>
    );
  }
}

export default Post;
