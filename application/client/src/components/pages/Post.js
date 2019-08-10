import React, { Component } from "react";

import axios from "axios";

import { AnchorButton, Intent, ProgressBar } from "@blueprintjs/core";

import _ from "lodash";
import { Icon } from "react-icons-kit";

import { remove } from "react-icons-kit/fa/remove";
import "./assets/DraggableUploader.scss";
import {
  fieldToChange,
  newImage,
  addToImageList,
  addLoadedFile,
  updateForm,
  setGeoLocation,
  errGetLocation,
  removeAllLoadedFile,
  onFileLoad
} from "../redux/actions/postAction";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Login from "../Users/Login";

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
      street: "",
      city: "",
      state: "",
      zipcode: "",
      issueType: "",
      description: "",
      imageFile: ""
    };
    //   this.handleUploadImage = this.handleUploadImage.bind(this);
    // this.toggle = this.toggle.bind(this);
    this.baseState = this.state;
  }

  // austin tsang
  // get users geo location
  getLocation = async () => {
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    // dont perform anything until get coordinates
    await navigator.geolocation.getCurrentPosition(
      this.success,
      this.error,
      options
    );
  };

  // success function getCurrentPosition
  success = pos => {
    let crd = pos.coords;

    this.props.setGeoLocation(crd);

    // this.setState({
    //   latitude: crd.latitude,
    //   longitude: crd.longitude
    // });
  };

  // Error function for getCurrentPosition parameter
  error = err => {
    // set error if no geolaction here
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  // When user submits issue
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    // let {
    //   city,
    //   street,
    //   state,
    //   zipcode,
    //   fd,
    //   // latitude,
    //   // longitude,
    //   issueType,
    //   imageFile
    // } = this.state;
    let { latitude, longitude, imageFile, zipcode, street, city, issueType, state } = this.props;
    console.log(latitude, longitude);
    console.log(this.state);
    let formData = new FormData();
    formData.append("imageFile", imageFile);
    formData.append("latitude", latitude);
    formData.append("longtude", longitude);
    formData.append("street", street);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("zipcode", zipcode);
    formData.append("issueType", issueType);

    // specify we are sending form data fd
    axios({
      method: "post",
      url: "/api/postings",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(res => {
        this.state.fd.forEach(key => {
          formData.delete(key);
        });
        this.setState(this.baseState);
      })
      .catch(err => {
        console.log(err);
      });
    console.log();
  };

  // One function handles all input changnes
  handleChangeInput = e => {
    console.log(e.target.value);
    let input = { [e.target.name]: e.target.value };
    console.log(input);
    this.props.updateForm(input);
  };

  // Change state based on input fields
  changeIssueType = e => {
    let inputIssueType = e.target.value;
    this.setState({ issueType: inputIssueType });
  };

  changeStreet = e => {
    let inputStreet = e.target.value;
    this.setState({ street: inputStreet });
  };

  changeCity = e => {
    let inputCity = e.target.value;
    this.setState({ city: inputCity });
  };

  changeState = e => {
    let inputState = e.target.value;
    this.setState({ state: inputState });
  };

  changeZipcode = e => {
    let inputZipcode = e.target.value;
    this.setState({ zipcode: inputZipcode });
  };

  changeLocation = e => {
    let inputLocation = e.target.value;
    this.setState({ location: inputLocation });
  };

  changePostType = e => {
    let inputPostType = e.target.value;
    this.setState({ postType: inputPostType });
  };

  changeDescription = e => {
    let inputDescription = e.target.description;
    this.setState({ description: inputDescription });
  };

  toggle(e) {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  // Utilizing formData to get image from user
  onFileLoad(e) {
    const imageFile = e.currentTarget.files[0];
    let fd = new FormData();
    let fileReader = new FileReader();
    // fd.append("file", imageFile);
    // this.setState({ fd: fd, imageFile: imageFile });
    this.props.onFileLoad(imageFile);
    fileReader.onload = () => {
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

    fileReader.readAsDataURL(imageFile);
  }

  addLoadedFile(file) {
    // this.setState(prevState => ({
    //   loadedFiles: [...prevState.loadedFiles, file]
    // }));
    this.props.addLoadedFile(file);
  }

  removeLoadedFile(file) {
    //Remove file from the State
    // this.setState(prevState => {
    //   let loadedFiles = prevState.loadedFiles;
    //   let newLoadedFiles = _.filter(loadedFiles, ldFile => {
    //     return ldFile != file;
    //   });
    //   return { loadedFiles: newLoadedFiles };
    // });
    this.props.removeAllLoadedFile();
  }

  removeAllLoadedFile() {
    this.setState({ loadedFiles: [] });
  }

  // updateLoadedFile(oldFile, newFile) {
    
  //   this.setState(prevState => {
  //     console.log("======" + prevState + "======");
  //     const loadedFiles = [...prevState.loadedFiles];
  //     _.find(loadedFiles, (file, idx) => {
  //       if (file == oldFile) loadedFiles[idx] = newFile;
  //     });

  //     return { loadedFiles };
  //   });

  //   return newFile;
  // }

  render() {
    let curToken = localStorage.getItem("token");
    // const { loadedFiles, longitude, latitude, issueType } = this.state;
    let {
      issueType,
      longitude,
      latitude,
      loadedFiles,
      errGetLocation
    } = this.props;
    console.log(loadedFiles);
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
                <label htmlFor="name">Select Type of Issue...</label>
                <br />
                <select
                  name={"issueType"}
                  value={issueType}
                  onChange={this.handleChangeInput}
                >
                  <option name={""} value="" />
                  <option name={"Air"} value="Air">
                    Air
                  </option>
                  <option value="Water">Water</option>
                  <option value="Garbage">Garbage</option>
                  <option value="Hazardous Waste">Hazardous Waste</option>
                  <option value="Natural Hazard">Natural Hazard</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                <label htmlFor="name">Street</label>
                <br />
                <input
                  placeholder="Enter Street Name..."
                  name="street"
                  type="text"
                  onChange={this.handleChangeInput}
                  noValidate
                  // onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                <label htmlFor="name">City</label>
                <br />
                <input
                  placeholder="Enter City..."
                  name="city"
                  type="text"
                  onChange={this.handleChangeInput}
                  noValidate
                  // onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="two fields">
              <div className="field">
                <label htmlFor="name">State</label>
                <br />
                <input
                  placeholder="Enter State..."
                  name="state"
                  type="text"
                  onChange={this.handleChangeInput}
                  noValidate
                  // onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="two fields">
              <div className="field">
                <label htmlFor="name">ZipCode</label>
                <br />
                <input
                  placeholder="Enter Zipcode..."
                  name="zipcode"
                  type="text"
                  onChange={this.handleChangeInput}
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
                Longitude: {longitude != "" && longitude}
                <br />
                Latitude: {latitude != "" && latitude}
              </div>
            </div>
            <br />
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

            <textarea onChange={this.handleChangeInput} />
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

const mapStateToProps = postState => {
  // let { postStatus, location, postType } = state.postReducer;
  let {
    postStatus,
    location,
    postType,
    fd,
    file,
    latitude,
    longitude,
    street,
    city,
    state,
    zipcode,
    issueType,
    description,
    imageFile,
    locationError,
    loadedFiles
  } = postState.postReducer;
  return {
    // loadedFiles: [],
    // fd: ""
    postStatus,
    location,
    postType,
    fd,
    file,
    latitude,
    longitude,
    street,
    city,
    state,
    zipcode,
    issueType,
    description,
    imageFile,
    locationError,
    loadedFiles
  };
};

const mapDispatchToProps = {
  updateForm,
  setGeoLocation,
  errGetLocation,
  addLoadedFile,
  removeAllLoadedFile,
  onFileLoad
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Post));

// export default Post;
