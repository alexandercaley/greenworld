import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import ImageUpload from "./ImageUpload";
import {
  updateForm,
  setGeoLocation,
  errGetLocation,
  resetReducer,
  isLoading,
  doneLoading
} from "../redux/actions/postAction";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class PostForm extends Component {
  // austin tsang
  // get users geo location
  getLocation = async () => {
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    this.props.isLoading();

    // dont perform anything until get coordinates
    await navigator.geolocation.getCurrentPosition(
      this.success,
      this.error,
      options
    );
  };

  // success function getCurrentPosition
  success = pos => {
    // set coordinates to props, actions
    // will handle the coordinates like latitude and longitude.
    let crd = pos.coords;
    this.props.setGeoLocation(crd);
    this.props.doneLoading();
  };

  // Error function for getCurrentPosition parameter
  error = err => {
    // set error if no geolaction here
    this.props.errGetLocation();
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  // When user submits issue
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props);
    let {
      latitude,
      longitude,
      imageFile,
      zipcode,
      street,
      city,
      issueType,
      state
    } = this.props;
    console.log(latitude, longitude);
    console.log(imageFile);
    let formData = new FormData();
    formData.append("imageFile", imageFile);
    formData.append("latitude", latitude);
    formData.append("longtude", longitude);
    formData.append("street", street);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("zipcode", zipcode);
    formData.append("issueType", issueType);

    // specify we are sending form data
    axios({
      method: "post",
      url: "/api/postings",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(res => {
        formData.forEach(key => {
          formData.delete(key);
        });
        this.props.resetReducer();
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

  render() {
    let {
      issueType,
      longitude,
      latitude,
      street,
      city,
      state,
      zipcode,
      locationError,
      geoLocationIsLoading
    } = this.props;
    console.log(locationError == "");
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
                value={street}
                type="text"
                onChange={this.handleChangeInput}
                noValidate
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
                value={city}
                onChange={this.handleChangeInput}
                noValidate
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
                value={state}
                onChange={this.handleChangeInput}
                noValidate
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
                value={zipcode}
                onChange={this.handleChangeInput}
                noValidate
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
              {locationError != "" &&
                "there was an error getting your location"}
              <br />
              {geoLocationIsLoading && "Getting location..."}
              <br />
              Longitude: {longitude != "" && longitude}
              <br />
              Latitude: {latitude != "" && latitude}
            </div>
          </div>
          <br />
          <ImageUpload />
          <br />

          <textarea onChange={this.handleChangeInput} />
          <br />
          <button className="submit button" onClick={this.handleSubmit}>
            Submit Issue
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = postState => {
  let {
    postStatus,
    location,
    postType,
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
    geoLocationIsLoading
  } = postState.postReducer;
  return {
    postStatus,
    location,
    postType,
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
    geoLocationIsLoading
  };
};

const mapDispatchToProps = {
  updateForm,
  setGeoLocation,
  errGetLocation,
  resetReducer,
  isLoading,
  doneLoading
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PostForm));
