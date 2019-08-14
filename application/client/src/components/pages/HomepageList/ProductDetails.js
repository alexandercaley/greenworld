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
    console.log(this.props.id);
  }

  render() {
    console.log("line 19")
    const { id, picture, postType } = this.props;
    // const { handleIndex } = this.props;
    let location = {
      lat: 37.774929,
      lng: -122.419416
    }
    return (
      <div>
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <img
                  // src={picture}
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
                    lat={37.774929}
                    lng={-122.419416}
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
  let { data, details_id, pageIndex } = state.homepageReducer;
;
  return { data, details_id, pageIndex };
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