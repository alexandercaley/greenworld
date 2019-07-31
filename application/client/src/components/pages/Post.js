import React, { Component } from "react";

import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DraggableUploader from "./DraggableUploader";
import Login from "../Users/Login";
import { updateForm } from "../redux/actions/postAction";

class Post extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let { postStatus, location, postType } = this.state;
    console.log(postStatus, location, postType);
    axios
      .post("/api/postings", {
        postStatus,
        location,
        postType
      })
      .then(res => {
        console.log("hi");
      })
      .catch(err => {
        console.log(err);
      });
    console.log();
  };

  checkPostings = () => {};

  // e is the even of the input text field
  // we use the name of the textfield for the key
  // and the value of textfield for the value
  changeTextField = e => {
    let typeIssue = { [e.target.name]: e.target.value };
    this.props.updateForm(typeIssue);
  };

  render() {
    let curToken = localStorage.getItem("token");
    return (
      <div>
        {curToken == null && (
          <p> You must login before you can post anything </p>
        )}
        {/* We pass in the route to props for Login because login has a feature
        to detect any incoming routes to redirect back to that page
        after logging in  */}
        {curToken == null ? (
          <Login route="/post" />
        ) : (
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
                  name="postType"
                  type="text"
                  noValidate
                  onChange={this.changeTextField}
                />
              </div>
            </div>
            <br />
            <div className="two fields">
              <div className="field">
                <label htmlFor="name">Location</label>
                <br />
                <input
                  placeholder=" Location"
                  name="location"
                  type="location"
                  onChange={this.changeTextField}
                  noValidate
                />
                {/* {formErrors.name.length > 0 && (
              <Span className="errorMessage">{formErrors.name}</Span>
            )} */}
              </div>
            </div>

            <br />
            <div className="two fields">
              <div className="field">
                <label htmlFor="name">post type</label>
                <br />
                <input
                  // className={formErrors.name.length > 0 ? "error" : null}
                  placeholder=" post staus"
                  name="postStatus"
                  type="post staus"
                  onChange={this.changeTextField}
                  noValidate
                  // onChange={this.handleChange}
                />
              </div>
            </div>
            <br />
            <br />
            <DraggableUploader />
            <br />
            <button className="submit button" onClick={this.handleSubmit}>
              Submit Issue
            </button>
          </div>
        )}
      </div>
    );
  }
}

// import action functions
// can also import different actions from different files
const mapStateToProps = state => {
  let { postStatus, location, postType } = state.postReducer;
  return {
    postStatus,
    location,
    postType
  };
};

const mapDispatchToProps = {
  updateForm
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Post));
// export default Post;
