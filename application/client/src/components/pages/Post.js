import React, { Component } from "react";

import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DraggableUploader from "./DraggableUploader";
import Login from "../Users/Login";
import { updateForm } from "../redux/actions/postAction";

class Post extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     postStatus: "",
  //     location: "",
  //     postType: ""
  //     // discription: "
  //   };
  //   //   this.handleUploadImage = this.handleUploadImage.bind(this);
  //   this.toggle = this.toggle.bind(this);
  // }

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
  changeTextField = e => {
    let typeIssue = { typeIssue: e.target.value };
    this.props.updateForm(typeIssue);
  };

  // changePostStatus = e => {
  //   let inputPostType = e.target.value;
  //   // this.setState({ postStatus: inputPostType });
  // };

  // changeLocation = e => {
  //   let inputLocation = e.target.value;
  //   this.setState({ location: inputLocation });
  // };

  // changePostType = e => {
  //   let inputPostType = e.target.value;
  //   this.setState({ postType: inputPostType });
  // };

  // changepostStatus = e => {
  //   let inputIssue = e.target.value;
  //   this.setState({ postStatus: inputIssue });
  // };

  toggle(e) {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

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
                  name="fullname"
                  type="text"
                  noValidate
                  onChange={this.changeTextField}
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
                  onChange={this.changeTextField}
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
                <label htmlFor="name">post type</label>
                <br />
                <input
                  // className={formErrors.name.length > 0 ? "error" : null}
                  placeholder=" post staus"
                  name="post staus"
                  type="post staus"
                  onChange={this.changeTextField}
                  noValidate
                  // onChange={this.handleChange}
                />

                {/* {formErrors.name.length > 0 && (
              <Span className="errorMessage">{formErrors.name}</Span>
            )} */}
              </div>
            </div>

            <br />
            {/* <div className="two fields">
            <div className="field">
              <label htmlFor="name">Discription</label>

              <br />
              <input
                // className={formErrors.name.length > 0 ? "error" : null}
                placeholder=" Detail"
                name="postType"
                type="postType"
                noValidate
                // onChange={this.handleChange}
              />
            </div>
          </div> */}
            <br />
            {/* <Link to="/showPostings">
            Click Here to check posted items in database
          </Link> */}
            {/* <UploadingImage /> */}
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
