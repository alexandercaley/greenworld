import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateData,
  updateClickedDetails,
  handleIndex
} from "../../redux/actions/homepageAction";

class ProductDetails extends Component {
  static defaultProps = {
    location: {
      lat: 37.774929,
      lng: -122.419416
    },
    zoom: 11
  };

  async componentDidMount() {
    console.log(this.props.detailsData);
  }

  render() {
    console.log("line 19");
    let imgObj = "";
    let dest = "";
    let filename = "";
    let imagepath = "";
    let location = {};
    const {
      id,
      city,
      imageFile,
      issueType,
      latitude,
      longitude,
      postings_created_date,
      state,
      street,
      zipcode,
      postType
    } = this.props.detailsData;
    if (imageFile == undefined) {
      this.props.history.push("/home");
    } else {
      console.log(imageFile);
      imgObj = JSON.parse(imageFile);
      console.log(imgObj);
      dest = "src/uploads/";
      filename = imgObj.filename;
      imagepath = dest + filename;
      console.log(imagepath);
      console.log(latitude, longitude);
      location = {
        lat: latitude,
        lng: longitude
      };
    }

    return (
      <div>
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <img
                  src={require(imagepath)}
                  className="img-card-top"
                  alt="recipe"
                  style={{ height: "14rem" }}
                />
              </div>
              <div style={{ height: "50vh", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: `AIzaSyBUHdcZt1CDRo9chaTXDHda-Wkj4HFh7yE`
                    //Google API key
                    // AIzaSyBUHdcZt1CDRo9chaTXDHda-Wkj4HFh7yE
                  }}
                  defaultCenter={location}
                  defaultZoom={11}
                >
                  <Marker
                    lat={latitude}
                    lng={longitude}
                    name="My Marker"
                    color="red"
                  />
                </GoogleMapReact>
              </div>
              <div className="card-body text-capitalized">
                <h6>id: {id}</h6>
                <h6>other details goes here</h6>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
// export default Products;
const mapStateToProps = state => {
  console.log(state);
  let { data, details_id, pageIndex, detailsData } = state.homepageReducer;
  return { data, details_id, pageIndex, detailsData };
};

const mapDispatchToProps = {
  updateData,
  updateClickedDetails,
  handleIndex
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductDetails));
