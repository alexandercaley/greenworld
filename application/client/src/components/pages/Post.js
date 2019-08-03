import React, { Component } from "react";

import axios from "axios";
import ImageLoad from "./ImageLoad";

const footerStyle = {
  backgroundColor: "#184E68",
  fontSize: "15px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "10px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "50px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}</div>
    </div>
  );
}

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postStatus: "",
      location: "",
      postType: ""
      // discription: "
    };
    //   this.handleUploadImage = this.handleUploadImage.bind(this);
    this.toggle = this.toggle.bind(this);
  }

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

  checkPostings = () => { };

  changePostStatus = e => {
    let inputPostType = e.target.value;
    this.setState({ postStatus: inputPostType });
  };

  changeLocation = e => {
    let inputLocation = e.target.value;
    this.setState({ location: inputLocation });
  };

  changePostType = e => {
    let inputPostType = e.target.value;
    this.setState({ postType: inputPostType });
  };

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
    return (
      <body>
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
                  onChange={this.changePostStatus}
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
                  onChange={this.changeLocation}
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
                  onChange={this.changePostType}
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

          <ImageLoad />

            <br />
            <button className="submit button" onClick={this.handleSubmit}>
              Submit Issue
          </button>
          </div>
        </div>

        <div>
          <Footer>
            <div class="row">
              <Link
                className="nav-link text-white text-lowercase ml-5"
                to="/home"
              >
                Home
                <i className="fas fa-home" />
              </Link>

              <Link
                className="nav-link text-white text-lowercase ml-5"
                to="/news"
              >
                news
              </Link>

              <Link
                className="nav-link text-white text-lowercase ml-5"
                to="/aboutUs"
              >
                About Us
              </Link>

              <Link
                className="nav-link text-white text-lowercase ml-5"
                to="/post"
              >
                Post
              </Link>

              <Link
                className="nav-link text-white text-lowercase ml-5"
                to="/category"
              >
                Category
              </Link>
            </div>

          </Footer>
        </div>
      </body>
    );
  }
}

export default Post;
