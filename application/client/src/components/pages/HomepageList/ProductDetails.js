import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

export default class ProductDetails extends Component {
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
    const { id, location, picture, postType } = this.props;
    const { handleIndex } = this.props;

    return (
      <div>
        <React.Fragment>
          <button
            className="btn btn-warning text-capitalize mb-5"
            onClick={() => handleIndex(1)}
          >
            back to home page
          </button>
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
                  defaultCenter={this.props.location}
                  defaultZoom={this.props.zoom}
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
