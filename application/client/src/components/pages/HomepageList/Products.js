import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateData,
  updateClickedDetails,
  handleIndex
} from "../../redux/actions/homepageAction";

class Products extends Component {
  render() {
    // const { image_url, title, recipe_id, publisher } = this.props.recipe;
    // const { id, location, postStatus, postType, picture } = this.props.recipe;
    const { handleDetails } = this.props;
    console.log(this.props);
    const {
      id,
      street,
      city,
      zipcode,
      state,
      description,
      imageFile,
      issueType
    } = this.props.issue;
    let imgObj = JSON.parse(imageFile);
    console.log(imgObj);

    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div onClick={() => this.props.handleDetails(0, id)}>
            <div className="card" >
              <img
                src={require("./uploads/08a1f565c9bdeafba912898dfb238881")}
                className="img-card-top"
                alt="Issue Image"
                style={{ height: "14rem" }}
              />
              <div className="card-body text-capitalized">
                <h6>Street: {street}</h6>
                <h6>City: {city}</h6>
                <h6>Zipcode: {zipcode}</h6>
                <h6>State: {state}</h6>
                <h6 className="text-warning text-slanted">
                  Issue Type: {issueType}
                </h6>
                <h6 className="text-warning text-slanted">
                  Description: {description}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// export default Products;
const mapStateToProps = state => {
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
)(withRouter(Products));