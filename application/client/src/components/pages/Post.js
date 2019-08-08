import React, { Component } from "react";

import axios from "axios";

import { AnchorButton, Intent, ProgressBar } from "@blueprintjs/core";

import _ from "lodash";
import { Icon } from "react-icons-kit";

import { remove } from "react-icons-kit/fa/remove";
import "./assets/DraggableUploader.scss";

// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";
// import ImageLoad from "./ImageLoad";
import Login from "../Users/Login";
import { GEOLOCATION } from "@blueprintjs/icons/lib/esm/generated/iconNames";

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
      postType: "",
      loadedFiles: [],
      fd: "",
      file: "",
      latitude: "",
      longitude: "",
      // discription: "
    };
    //   this.handleUploadImage = this.handleUploadImage.bind(this);
    // this.toggle = this.toggle.bind(this);
  }

  getLocation = () => {
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(this.success, this.error, options)

  }

  success = (pos) => {
    let crd = pos.coords;

    this.setState({
      latitude: crd.latitude,
      longitude: crd.longitude
    })
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  // When user submits issue
  handleSubmit = e => {
    e.preventDefault();

    let { postStatus, location, postType, loadedFiles, file, fd } = this.state;

    // specify we are sending form data fd
    axios({
      method: "post",
      url: "/api/postings",
      data: fd,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(res => {
        console.log("hi");
      })
      .catch(err => {
        console.log(err);
      });
    console.log();
  };

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

  toggle(e) {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  // Utilizing formData to get image from user
  onFileLoad(e) {
    const file = e.currentTarget.files[0];
    let fd = new FormData();
    let fileReader = new FileReader();
    fd.append("file", file);
    this.setState({ fd: fd, file: file });
    fileReader.onload = () => {
      console.log("IMAGE LOADED: ", fileReader.result);
      const file = {
        data: fileReader.result,
        isUploading: false
      };
      //Add file
      this.addLoadedFile(file);
    };

    fileReader.onabort = () => {
      alert("Reading Aborted");
    };

    fileReader.onerror = () => {
      alert("Reading ERROR!");
    };

    fileReader.readAsDataURL(file);
  }

  addLoadedFile(file) {
    this.setState(prevState => ({
      loadedFiles: [...prevState.loadedFiles, file]
    }));
  }

  removeLoadedFile(file) {
    //Remove file from the State
    this.setState(prevState => {
      let loadedFiles = prevState.loadedFiles;
      let newLoadedFiles = _.filter(loadedFiles, ldFile => {
        return ldFile != file;
      });
      return { loadedFiles: newLoadedFiles };
    });
  }

  removeAllLoadedFile() {
    this.setState({ loadedFiles: [] });
  }

  updateLoadedFile(oldFile, newFile) {
    this.setState(prevState => {
      console.log("======" + prevState + "======");
      const loadedFiles = [...prevState.loadedFiles];
      _.find(loadedFiles, (file, idx) => {
        if (file == oldFile) loadedFiles[idx] = newFile;
      });

      return { loadedFiles };
    });

    return newFile;
  }

  render() {
    let curToken = localStorage.getItem("token");
    const { loadedFiles, longitude, latitude } = this.state;
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

                  placeholder="Type Issue"
                  name="fullname"
                  type="text"
                  onChange={this.changePostStatus}
                  noValidate
                  // onChange={this.handleChange}
                />

              </div>
            </div>
            <br />
            <div className="two fields">
              <div className="field">
                <label htmlFor="name">Location</label>
                <br />
                <button onClick={this.getLocation}> Add location</button>
                <br />
                Longitude: {longitude != "" && longitude }<br/>
                Latitude: {latitude != "" && latitude }             
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
              </div>
            </div>

            <br />

            <br />

            <div
              className="inner-container"
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div className="sub-header">Drag an Image</div>
              <div className="draggable-container">
                <input
                  type="file"
                  id="file-browser-input"
                  name="file-browser-input"
                  ref={input => (this.fileInput = input)}
                  onDragOver={e => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onDrop={this.onFileLoad.bind(this)}
                  onChange={this.onFileLoad.bind(this)}
                />
                <div className="files-preview-container ip-scrollbar">
                  {loadedFiles.map((file, idx) => {
                    return (
                      <div className="file" key={idx}>
                        <img src={file.data} />
                        <div className="container">
                          <span className="progress-bar">
                            {file.isUploading && <ProgressBar />}
                          </span>
                          <span
                            className="remove-btn"
                            onClick={() => this.removeLoadedFile(file)}
                          >
                            <Icon icon={remove} size={19} />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="helper-text">Drag and Drop Images Here</div>
                <div className="file-browser-container">
                  <AnchorButton
                    text="Browse"
                    intent={Intent.PRIMARY}
                    minimal={true}
                    onClick={() => this.fileInput.click()}
                  />
                </div>
              </div>
            </div>

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

export default Post;
